/* =====================
   AI CHATBOT LOGIC
====================== */

class PortfolioChatbot {
  constructor() {
    this.apiKey = null;
    this.messages = [];
    this.isOpen = false;
    this.isLoading = false;
    this.conversationHistory = [];
    
    // Portfolio context for the AI
    this.portfolioContext = `You are a helpful AI assistant representing Hassan Khan, an Android Developer and Software Engineer. 
Hassan has 1.5+ years of experience building high-quality Android applications using Kotlin, Java, and React Native.

Key projects:
1. Bank Signage App - Kotlin, Jetpack Compose, Retrofit, Room
2. Login & User Management App - Firebase authentication with SQLite/Room
3. Weather Forecast App - Real-time weather data from REST API
4. Custom Android Launcher App - Kotlin, Android Framework
5. E-commerce Website - Shopify store (Andaz-e-Khas)

Skills: Kotlin, Java, React Native, Jetpack Compose, XML, MVVM, Firebase, REST APIs, Git, Android Studio
Experience: Android Developer for 1.5+ years
Certificates: ICAN Certificate, Netsol Internship Certificate
Contact: hassankhan74812@gmail.com, GitHub: HassanKhanO1, LinkedIn available

Be friendly, professional, and answer questions about Hassan's portfolio, projects, and expertise.`;

    this.init();
  }

  init() {
    this.createChatbotUI();
    this.attachEventListeners();
    this.loadApiKey();
  }

  createChatbotUI() {
    const container = document.body;

    // Toggle Button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'chatbot-toggle';
    toggleBtn.innerHTML = '💬';
    toggleBtn.id = 'chatbot-toggle';
    container.appendChild(toggleBtn);

    // Chat Widget
    const widget = document.createElement('div');
    widget.className = 'chatbot-widget';
    widget.id = 'chatbot-widget';
    widget.innerHTML = `
      <div class="chatbot-header">
        <div>
          <h3>Hassan's AI Assistant</h3>
          <p>Ask me about my projects & experience</p>
        </div>
        <button class="chatbot-close" id="chatbot-close">✕</button>
      </div>
      <div class="chatbot-messages" id="chatbot-messages">
        <div class="chatbot-message bot">
          <div class="message-content bot">
            👋 Hi! I'm Hassan's AI Assistant. Ask me anything about his projects, skills, or experience!
          </div>
        </div>
      </div>
      <div class="chatbot-input-area">
        <input 
          type="text" 
          id="chatbot-input" 
          class="chatbot-input" 
          placeholder="Ask me anything..." 
          autocomplete="off"
        />
        <button class="chatbot-send" id="chatbot-send">➤</button>
      </div>
    `;
    container.appendChild(widget);
  }

  attachEventListeners() {
    const toggleBtn = document.getElementById('chatbot-toggle');
    const closeBtn = document.getElementById('chatbot-close');
    const sendBtn = document.getElementById('chatbot-send');
    const input = document.getElementById('chatbot-input');
    const widget = document.getElementById('chatbot-widget');

    toggleBtn.addEventListener('click', () => this.toggleChat());
    closeBtn.addEventListener('click', () => this.toggleChat());
    sendBtn.addEventListener('click', () => this.sendMessage());
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
  }

  toggleChat() {
    const widget = document.getElementById('chatbot-widget');
    const toggleBtn = document.getElementById('chatbot-toggle');
    const input = document.getElementById('chatbot-input');

    this.isOpen = !this.isOpen;
    widget.classList.toggle('active');
    toggleBtn.classList.toggle('hidden');

    if (this.isOpen && !this.apiKey) {
      this.requestApiKey();
    }

    if (this.isOpen) {
      setTimeout(() => input.focus(), 300);
    }
  }

  requestApiKey() {
    const apiKey = prompt(
      '🔑 Please enter your Google AI API Key:\n\n' +
      'Get free key at: https://ai.google.dev/\n\n' +
      'This key is stored locally in your browser only.'
    );

    if (apiKey && apiKey.trim()) {
      this.apiKey = apiKey.trim();
      localStorage.setItem('chatbot_api_key', this.apiKey);
      this.addBotMessage('✅ API Key saved! You can now chat with me.');
    } else {
      this.addBotMessage(
        '⚠️ API Key is required. Get a free key at https://ai.google.dev/ and try again!'
      );
    }
  }

  loadApiKey() {
    this.apiKey = localStorage.getItem('chatbot_api_key');
  }

  async sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();

    if (!message) return;

    if (!this.apiKey) {
      this.requestApiKey();
      return;
    }

    // Add user message
    this.addUserMessage(message);
    input.value = '';
    input.focus();

    // Show loading
    this.setLoading(true);

    try {
      const response = await this.getAIResponse(message);
      this.addBotMessage(response);
    } catch (error) {
      console.error('Error:', error);
      this.addBotMessage(
        '❌ Error: ' + (error.message || 'Failed to get response. Please check your API key.')
      );
    } finally {
      this.setLoading(false);
    }
  }

  async getAIResponse(userMessage) {
    // Using Google Generative AI (Gemini)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.apiKey}`;

    const systemPrompt = this.portfolioContext;
    const conversationText = this.conversationHistory
      .map((msg) => `${msg.role}: ${msg.content}`)
      .join('\n');

    const fullPrompt = `${systemPrompt}\n\nConversation:\n${conversationText}\n\nUser: ${userMessage}\n\nAssistant:`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: fullPrompt,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        error.error?.message || 'Failed to get AI response'
      );
    }

    const data = await response.json();
    const aiResponse =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Sorry, I could not generate a response.';

    // Store in conversation history
    this.conversationHistory.push({ role: 'user', content: userMessage });
    this.conversationHistory.push({
      role: 'assistant',
      content: aiResponse,
    });

    // Keep only last 10 exchanges to avoid token limits
    if (this.conversationHistory.length > 20) {
      this.conversationHistory = this.conversationHistory.slice(-20);
    }

    return aiResponse;
  }

  addUserMessage(message) {
    this.addMessage(message, 'user');
  }

  addBotMessage(message) {
    this.addMessage(message, 'bot');
  }

  addMessage(message, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');

    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${sender}`;

    const contentDiv = document.createElement('div');
    contentDiv.className = `message-content ${sender}`;
    contentDiv.textContent = message;

    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);

    // Auto scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    this.messages.push({ text: message, sender });
  }

  setLoading(isLoading) {
    this.isLoading = isLoading;
    const messagesContainer = document.getElementById('chatbot-messages');

    if (isLoading) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'chatbot-message bot';
      messageDiv.id = 'loading-indicator';

      const loadingDiv = document.createElement('div');
      loadingDiv.className = 'loading-dots';
      loadingDiv.innerHTML =
        '<div class="loading-dot"></div><div class="loading-dot"></div><div class="loading-dot"></div>';

      messageDiv.appendChild(loadingDiv);
      messagesContainer.appendChild(messageDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    } else {
      const loadingIndicator = document.getElementById('loading-indicator');
      if (loadingIndicator) {
        loadingIndicator.remove();
      }
    }
  }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioChatbot();
});
