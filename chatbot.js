/* =====================
   AI CHATBOT LOGIC
====================== */

class PortfolioChatbot {
  constructor() {
    this.messages = [];
    this.isOpen = false;
    this.isLoading = false;
    this.conversationHistory = [];
    
    // Portfolio context for the AI
    this.portfolioContext = `You are a helpful AI assistant representing Hassan Khan, an Android Developer and Software Engineer. 
Hassan has 1.5+ years of experience building high-quality Android applications using Kotlin, Java, and React Native.

Key projects:
1. Bank Signage App - Kotlin, Jetpack Compose, Retrofit, Room - Android app to download, display, and manage signage data with offline support and internet connectivity checker
2. Login & User Management App - Firebase authentication with SQLite/Room database and full CRUD operations
3. Weather Forecast App - Real-time weather data fetched from REST API using Kotlin and Retrofit
4. Custom Android Launcher App - Custom Android launcher app to replace default system launcher with personalized home screen UI and app drawer
5. E-commerce Website (Andaz-e-Khas) - Shopify store with visually appealing design, intuitive navigation, and seamless shopping experience

Skills: 
- Languages: Kotlin, Java, React Native
- Android: Jetpack Compose, XML, MVVM, Coroutines, Flow
- Backend & Data: Retrofit, Room, Firebase Authentication, SQLite, REST APIs
- Tools: Git, GitHub, Android Studio, VS Code, AI Tools

Experience: Android Developer for 1.5+ years working on production-level Android applications
Certificates: ICAN Certificate, Netsol Internship Certificate
Contact: Email: hassankhan74812@gmail.com, GitHub: https://github.com/HassanKhanO1, LinkedIn: https://www.linkedin.com/in/hassan-khan-964265260/

Be friendly, professional, and answer questions about Hassan's portfolio, projects, and expertise. Keep responses concise and helpful.`;

    this.predefinedResponses = {
      'hello': 'Hi! 👋 I\'m Hassan\'s AI Assistant. Ask me anything about his projects, skills, or experience!',
      'hi': 'Hello! 👋 I\'m here to help. What would you like to know about Hassan?',
      'projects': `Hassan has worked on several impressive projects:
1. **Bank Signage App** - Android app with offline support using Kotlin & Jetpack Compose
2. **Login & User Management App** - Firebase auth with local database
3. **Weather Forecast App** - Real-time weather data from REST APIs
4. **Custom Android Launcher** - Full replacement launcher with custom UI
5. **E-commerce Store** - Shopify-based e-commerce platform

Which one interests you?`,
      'skills': `Hassan's main skills include:
- **Languages**: Kotlin, Java, React Native
- **Android**: Jetpack Compose, XML, MVVM, Coroutines, Flow
- **Backend**: REST APIs, Firebase, Retrofit, Room, SQLite
- **Tools**: Git, GitHub, Android Studio, VS Code, AI Tools

Want to know more about any specific skill?`,
      'experience': `Hassan has **1.5+ years** of professional experience as an Android Developer:
- Built production-level Android applications
- Expertise in API integration and UI implementation
- Strong knowledge of offline caching and MVVM architecture
- Experience with Jetpack Compose and XML layouts

Looking to hire or collaborate? Check his GitHub or LinkedIn!`,
      'contact': `You can reach Hassan through:
📧 **Email**: hassankhan74812@gmail.com
🐙 **GitHub**: https://github.com/HassanKhanO1
💼 **LinkedIn**: https://www.linkedin.com/in/hassan-khan-964265260/`,
      'about': `Hassan Khan is an Android Developer and Software Engineer with 1.5+ years of experience building scalable, user-friendly Android applications using modern tools and clean architecture principles. He specializes in Kotlin, Jetpack Compose, and has strong expertise in REST API integration, offline caching, and MVVM architecture.`,
      'certificates': `Hassan holds the following certificates:
✅ ICAN Certificate
✅ Netsol Internship Certificate`,
      'bank signage': `**Bank Signage App** is an Android application that allows users to:
- Download and manage signage data
- Display signage with offline support
- Check internet connectivity

Tech Stack: Kotlin, Jetpack Compose, Retrofit, Room Database`,
      'login app': `**Login & User Management App** features:
- Firebase Authentication
- Local SQLite/Room database
- Full CRUD operations for user management
- Secure data storage

Tech Stack: Kotlin, Firebase, SQLite, Room`,
      'weather app': `**Weather Forecast App** provides:
- Real-time weather data
- Fetched from REST APIs
- Clean, intuitive UI

Tech Stack: Kotlin, Retrofit`,
      'launcher app': `**Custom Android Launcher App** is a replacement for the default system launcher featuring:
- Personalized home screen UI
- Custom app drawer
- Launcher intent handling
- Full launcher functionality

Tech Stack: Kotlin, Android Framework, Custom UI`,
      'shopify': `**Andaz-e-Khas E-commerce Store** is a Shopify-based platform offering:
- Curated collection of stylish products
- Clean, modern design
- Intuitive navigation
- Seamless shopping experience

Tech Stack: Shopify`
    };

    this.init();
  }

  init() {
    this.createChatbotUI();
    this.attachEventListeners();
  }

  createChatbotUI() {
    const container = document.body;

    // Toggle Button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'chatbot-toggle';
    toggleBtn.innerHTML = '💬';
    toggleBtn.id = 'chatbot-toggle';
    toggleBtn.title = 'Open Chat';
    container.appendChild(toggleBtn);

    // Chat Widget
    const widget = document.createElement('div');
    widget.className = 'chatbot-widget';
    widget.id = 'chatbot-widget';
    widget.innerHTML = `
      <div class="chatbot-header">
        <div>
          <h3>Hassan's AI Assistant</h3>
          <p>Ask me about projects & experience</p>
        </div>
        <button class="chatbot-close" id="chatbot-close" title="Close Chat">✕</button>
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
        <button class="chatbot-send" id="chatbot-send" title="Send Message">➤</button>
      </div>
    `;
    container.appendChild(widget);
  }

  attachEventListeners() {
    const toggleBtn = document.getElementById('chatbot-toggle');
    const closeBtn = document.getElementById('chatbot-close');
    const sendBtn = document.getElementById('chatbot-send');
    const input = document.getElementById('chatbot-input');

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

    if (this.isOpen) {
      setTimeout(() => input.focus(), 300);
    }
  }

  async sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();

    if (!message) return;

    // Add user message
    this.addUserMessage(message);
    input.value = '';
    input.focus();

    // Show loading
    this.setLoading(true);

    try {
      // Simulate a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const response = this.generateResponse(message);
      this.addBotMessage(response);
    } catch (error) {
      console.error('Error:', error);
      this.addBotMessage('Sorry, I had trouble processing that. Could you try again?');
    } finally {
      this.setLoading(false);
    }
  }

  generateResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for predefined responses (exact or partial matches)
    for (const [key, response] of Object.entries(this.predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    // Intelligent matching for related queries
    if (lowerMessage.includes('project')) {
      return this.predefinedResponses['projects'];
    }
    if (lowerMessage.includes('skill') || lowerMessage.includes('expertise')) {
      return this.predefinedResponses['skills'];
    }
    if (lowerMessage.includes('work') || lowerMessage.includes('year')) {
      return this.predefinedResponses['experience'];
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('connect')) {
      return this.predefinedResponses['contact'];
    }
    if (lowerMessage.includes('certificate') || lowerMessage.includes('qualification')) {
      return this.predefinedResponses['certificates'];
    }
    if (lowerMessage.includes('who') || lowerMessage.includes('tell me about')) {
      return this.predefinedResponses['about'];
    }

    // Default response for queries we don't have specific answers for
    const defaultResponses = [
      `That's a great question! I don't have specific information about that, but you can learn more about Hassan by checking his GitHub (https://github.com/HassanKhanO1) or LinkedIn profile. Feel free to ask about his projects, skills, or experience!`,
      `I'm not sure about that specific topic, but I'd be happy to tell you about Hassan's Android development projects, his tech stack, or how to get in touch with him!`,
      `Great question! While I don't have details on that, you can always reach out to Hassan directly at hassankhan74812@gmail.com or connect on LinkedIn. Anything else you'd like to know about his work?`,
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
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

    this.messages.push({ text: message, sender, timestamp: new Date() });
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
