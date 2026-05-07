/* =====================
   AI CHATBOT LOGIC
====================== */

class PortfolioChatbot {
  constructor() {
    this.messages = [];
    this.isOpen = false;
    this.isLoading = false;
    this.conversationHistory = [];
    
    // Portfolio keywords for relevance checking
    this.portfolioKeywords = [
      'android', 'kotlin', 'java', 'react native', 'jetpack', 'compose', 'firebase',
      'project', 'skill', 'experience', 'app', 'developer', 'engineer', 'contact',
      'github', 'linkedin', 'email', 'certificate', 'qualification', 'work',
      'signage', 'login', 'weather', 'launcher', 'shopify', 'ecommerce',
      'retrofit', 'room', 'mvvm', 'coroutines', 'xml', 'api', 'rest',
      'sqlite', 'authentication', 'database', 'ui', 'mobile', 'application',
      'hassan', 'khan', 'about', 'years', 'experience', 'production', 'offline',
      'caching', 'architecture', 'ican', 'netsol', 'internship', 'reach', 'connect',
      'telephone', 'phone', 'social', 'media', 'profile', 'portfolio', 'resume',
      'cv', 'hire', 'collaborate', 'work with', 'collaborate'
    ];

    this.predefinedResponses = {
      'hello': 'Hi! 👋 I\'m Hassan\'s AI Assistant. Ask me anything about his projects, skills, or experience!',
      'hi': 'Hello! 👋 I\'m here to help. What would you like to know about Hassan?',
      'hey': 'Hey there! 👋 I\'m Hassan\'s AI Assistant. Feel free to ask about his portfolio!',
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
      'email': `📧 Hassan's Email Address:
**hassankhan74812@gmail.com**

Feel free to reach out to him directly!`,
      'github': `🐙 Hassan's GitHub Profile:
**https://github.com/HassanKhanO1**

Check out his repositories and projects there!`,
      'linkedin': `💼 Hassan's LinkedIn Profile:
**https://www.linkedin.com/in/hassan-khan-964265260/**

Connect with him on LinkedIn!`,
      'social media': `You can connect with Hassan on:
🐙 **GitHub**: https://github.com/HassanKhanO1
💼 **LinkedIn**: https://www.linkedin.com/in/hassan-khan-964265260/
📧 **Email**: hassankhan74812@gmail.com`,
      'reach': `You can reach Hassan through:
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
      'login': `**Login & User Management App** features:
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
      'weather': `**Weather Forecast App** provides:
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
      'launcher': `**Custom Android Launcher App** is a replacement for the default system launcher featuring:
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

Tech Stack: Shopify`,
      'ecommerce': `**Andaz-e-Khas E-commerce Store** is a Shopify-based platform offering:
- Curated collection of stylish products
- Clean, modern design
- Intuitive navigation
- Seamless shopping experience

Tech Stack: Shopify`,
      'kotlin': `Kotlin is one of Hassan's primary programming languages. He uses it extensively in:
- Android app development
- Jetpack Compose UI development
- Building production-level applications

Hassan has strong expertise in Kotlin best practices and modern Android development!`,
      'java': `Java is another key language Hassan uses in Android development. He has experience with:
- Backend development
- Android native code
- Integration with Android frameworks

It's one of his core competencies!`,
      'jetpack compose': `**Jetpack Compose** is a modern declarative UI toolkit that Hassan uses extensively:
- Building responsive UIs
- Creating modern Android interfaces
- Working with reactive programming

Check out his Bank Signage App which uses Jetpack Compose!`,
      'firebase': `**Firebase** is a backend service Hassan uses for:
- User Authentication
- Real-time databases
- Cloud integration

He has strong experience with Firebase in production applications!`,
      'mvvm': `**MVVM (Model-View-ViewModel)** is Hassan's preferred architecture pattern:
- Clean separation of concerns
- Better testability
- Scalable applications

He applies MVVM principles in all his professional projects!`,
      'rest api': `Hassan has extensive experience with **REST APIs**:
- API integration in Android apps
- Retrofit library implementation
- Handling HTTP requests and responses

Check his Weather Forecast App for REST API integration example!`,
      'retrofit': `**Retrofit** is an HTTP client library Hassan uses for:
- Making REST API calls
- Parsing JSON responses
- Building scalable API integration

He's proficient in Retrofit and uses it in multiple projects!`,
      'room': `**Room** is SQLite abstraction Hassan uses for:
- Local database management
- Data persistence
- Offline-first applications

He implements Room in several of his projects for data storage!`
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

  isPortfolioRelevant(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check if message contains any portfolio keywords
    return this.portfolioKeywords.some(keyword => 
      lowerMessage.includes(keyword)
    );
  }

  generateResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check if the question is relevant to the portfolio
    if (!this.isPortfolioRelevant(userMessage)) {
      return this.getNonRelevantResponse();
    }

    // PRIORITY 1: Check for SPECIFIC contact questions first (longest and most specific)
    if (lowerMessage.includes('linkedin') && !lowerMessage.includes('github') && !lowerMessage.includes('email')) {
      return this.predefinedResponses['linkedin'];
    }
    if (lowerMessage.includes('github') && !lowerMessage.includes('linkedin') && !lowerMessage.includes('email')) {
      return this.predefinedResponses['github'];
    }
    if (lowerMessage.includes('email') && !lowerMessage.includes('linkedin') && !lowerMessage.includes('github')) {
      return this.predefinedResponses['email'];
    }

    // PRIORITY 2: Check for multi-contact questions (contact, reach, connect, social media)
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || 
        lowerMessage.includes('connect') || lowerMessage.includes('social media') ||
        lowerMessage.includes('phone') || (lowerMessage.includes('how') && lowerMessage.includes('contact'))) {
      return this.predefinedResponses['contact'];
    }

    // PRIORITY 3: Check for exact or partial matches in predefined responses (longest match first)
    const sortedKeys = Object.keys(this.predefinedResponses).sort((a, b) => b.length - a.length);
    
    for (const key of sortedKeys) {
      if (key !== 'contact' && key !== 'email' && key !== 'github' && key !== 'linkedin' && 
          lowerMessage.includes(key)) {
        return this.predefinedResponses[key];
      }
    }

    // PRIORITY 4: Intelligent matching for related queries
    if (lowerMessage.includes('project') || lowerMessage.includes('build') || lowerMessage.includes('develop') || lowerMessage.includes('create')) {
      return this.predefinedResponses['projects'];
    }

    if (lowerMessage.includes('skill') || lowerMessage.includes('expertise') || lowerMessage.includes('know') || lowerMessage.includes('language') || lowerMessage.includes('technology')) {
      return this.predefinedResponses['skills'];
    }

    if (lowerMessage.includes('work') || lowerMessage.includes('year') || lowerMessage.includes('worked') || lowerMessage.includes('experience')) {
      return this.predefinedResponses['experience'];
    }

    if (lowerMessage.includes('certificate') || lowerMessage.includes('qualification') || lowerMessage.includes('credential')) {
      return this.predefinedResponses['certificates'];
    }

    if (lowerMessage.includes('who are you') || lowerMessage.includes('tell me about') || lowerMessage.includes('about you') || 
        lowerMessage.includes('about hassan') || lowerMessage.includes('introduce yourself')) {
      return this.predefinedResponses['about'];
    }

    // If no specific match but it's portfolio-relevant, provide helpful response
    return `That's a great portfolio-related question! While I don't have specific information on that topic, here are some things you can ask me about:

📚 **What I can help with:**
- Ask about specific projects (Bank Signage App, Login App, Weather App, Launcher, Shopify Store)
- Inquire about programming languages (Kotlin, Java, React Native)
- Learn about technologies (Jetpack Compose, Firebase, MVVM, REST APIs, etc.)
- Ask about Hassan's experience and background
- Get contact information (Email, GitHub, LinkedIn)
- Learn about certificates

Try asking: "What's Hassan's LinkedIn?" or "How can I contact Hassan?"`;
  }

  getNonRelevantResponse() {
    const hints = [
      `I'm an AI Assistant designed to answer questions about Hassan Khan's portfolio. I'm specialized in information about his Android development projects and professional experience.

**Here are some things you can ask me:**
- 📱 Projects (Bank Signage App, Weather App, Custom Launcher, etc.)
- 💻 Skills & Technologies (Kotlin, Firebase, Jetpack Compose, etc.)
- 👨‍💼 Work Experience & Background
- 📧 Contact Information (Email, GitHub, LinkedIn)
- 🎓 Certificates & Qualifications

Try asking: "What projects has Hassan worked on?" or "What's his LinkedIn?"`,

      `I'm an AI Assistant for Hassan Khan's portfolio! I'm not able to answer general questions, but I'd love to tell you about:
- **Hassan's Android Projects** 🚀
- **His Technical Skills** 💡
- **His Professional Experience** 📈
- **How to Contact Him** 📞
- **His Achievements** 🏆

Ask me something like: "What is Hassan's experience?" or "Show me his contact information"`,

      `I'm a Portfolio AI Assistant - I can help you learn about Hassan Khan! My expertise is in his:
✅ Android Development Projects
✅ Programming Skills & Technologies
✅ Professional Experience
✅ Contact Information (Email, GitHub, LinkedIn)
✅ Certifications

Feel free to ask about his work or background!`
    ];

    return hints[Math.floor(Math.random() * hints.length)];
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
