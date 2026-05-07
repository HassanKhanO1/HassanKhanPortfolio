/* =====================
   AI CHATBOT LOGIC
====================== */

class PortfolioChatbot {
  constructor() {
    this.messages = [];
    this.isOpen = false;
    this.isLoading = false;

    this.portfolioKeywords = [
      'android', 'kotlin', 'java', 'react native', 'jetpack', 'compose',
      'firebase', 'project', 'skill', 'experience', 'app', 'developer',
      'github', 'linkedin', 'email', 'contact', 'portfolio', 'resume',
      'mvvm', 'retrofit', 'room', 'sqlite', 'api', 'rest', 'hassan'
    ];

    this.predefinedResponses = {
      hello: `
# 👋 Hello!

I'm **Hassan's AI Assistant**.

I can help you learn about:

- **Projects**
- **Skills**
- **Experience**
- **Contact Information**
- **Technologies**

Ask me anything about Hassan's portfolio.
`,

      projects: `
# 🚀 Projects

## 📱 Bank Signage App
- Offline support
- Kotlin & Jetpack Compose
- Internet checker

## 🔐 Login & User Management App
- Firebase Authentication
- SQLite / Room Database
- CRUD Operations

## 🌦️ Weather Forecast App
- REST API Integration
- Real-time weather data

## 🛒 Shopify E-commerce Store
- Modern UI
- Smooth shopping experience
`,

      skills: `
# 💻 Technical Skills

## Languages
- **Kotlin**
- **Java**
- **React Native**

## Android
- **Jetpack Compose**
- **XML**
- **MVVM**
- **Coroutines**
- **Flow**

## Backend & Database
- **Firebase**
- **Retrofit**
- **Room**
- **SQLite**
- **REST APIs**
`,

      experience: `
# 👨‍💼 Experience

Hassan has **1.5+ years** of experience as an **Android Developer**.

## Expertise
- Production-level Android Apps
- REST API Integration
- Clean Architecture
- Offline Caching
- Modern UI Development
`,

      contact: `
# 📞 Contact Information

- 📧 **Email:** hassankhan74812@gmail.com
- 🐙 **GitHub:** https://github.com/HassanKhanO1
- 💼 **LinkedIn:** https://www.linkedin.com/in/hassan-khan-964265260/
`,

      kotlin: `
# 💙 Kotlin

Kotlin is Hassan's primary language for Android development.

## Experience Includes
- Jetpack Compose
- MVVM Architecture
- Coroutines & Flow
- Production Apps
`,

      firebase: `
# 🔥 Firebase

Hassan uses Firebase for:

- Authentication
- Cloud Services
- Real-time Features
- Backend Integration
`,

      mvvm: `
# 🏗️ MVVM Architecture

Hassan follows **MVVM** for:

- Clean code structure
- Better scalability
- Easier testing
- Separation of concerns
`
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
    toggleBtn.id = 'chatbot-toggle';
    toggleBtn.innerHTML = '💬';
    container.appendChild(toggleBtn);

    // Widget
    const widget = document.createElement('div');
    widget.className = 'chatbot-widget';
    widget.id = 'chatbot-widget';

    widget.innerHTML = `
      <div class="chatbot-header">
        <div>
          <h3>Hassan's AI Assistant</h3>
          <p>Ask about projects & skills</p>
        </div>

        <button class="chatbot-close" id="chatbot-close">
          ✕
        </button>
      </div>

      <div class="chatbot-messages" id="chatbot-messages">
        <div class="chatbot-message bot">
          <div class="message-content bot">
            ${this.formatMessage(this.predefinedResponses.hello)}
          </div>
        </div>
      </div>

      <div class="chatbot-input-area">
        <input
          type="text"
          id="chatbot-input"
          class="chatbot-input"
          placeholder="Ask something..."
        />

        <button class="chatbot-send" id="chatbot-send">
          ➤
        </button>
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
      if (e.key === 'Enter') {
        this.sendMessage();
      }
    });
  }

  toggleChat() {
    const widget = document.getElementById('chatbot-widget');
    const toggleBtn = document.getElementById('chatbot-toggle');

    this.isOpen = !this.isOpen;

    widget.classList.toggle('active');
    toggleBtn.classList.toggle('hidden');
  }

  async sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();

    if (!message) return;

    this.addUserMessage(message);

    input.value = '';

    this.setLoading(true);

    await new Promise(resolve => setTimeout(resolve, 500));

    const response = this.generateResponse(message);

    this.setLoading(false);

    this.addBotMessage(response);
  }

  isPortfolioRelevant(message) {
    const lower = message.toLowerCase();

    return this.portfolioKeywords.some(keyword =>
      lower.includes(keyword)
    );
  }

  generateResponse(message) {
    const lower = message.toLowerCase();

    if (!this.isPortfolioRelevant(message)) {
      return `
# 🤖 Portfolio Assistant

I'm an AI Assistant designed only for Hassan Khan's portfolio.

## You can ask about:
- 📱 Projects
- 💻 Skills
- 👨‍💼 Experience
- 📞 Contact Information
- 🚀 Technologies

### Example Questions
- "What projects has Hassan worked on?"
- "What are Hassan's skills?"
- "Show Hassan's GitHub"
`;
    }

    if (lower.includes('project')) {
      return this.predefinedResponses.projects;
    }

    if (lower.includes('skill')) {
      return this.predefinedResponses.skills;
    }

    if (lower.includes('experience')) {
      return this.predefinedResponses.experience;
    }

    if (
      lower.includes('contact') ||
      lower.includes('github') ||
      lower.includes('linkedin') ||
      lower.includes('email')
    ) {
      return this.predefinedResponses.contact;
    }

    if (lower.includes('kotlin')) {
      return this.predefinedResponses.kotlin;
    }

    if (lower.includes('firebase')) {
      return this.predefinedResponses.firebase;
    }

    if (lower.includes('mvvm')) {
      return this.predefinedResponses.mvvm;
    }

    return `
# 💡 Portfolio Question

I can answer questions related to Hassan's portfolio.

## Try Asking
- Projects
- Skills
- Android Development
- Kotlin
- Firebase
- Experience
- Contact Information
`;
  }

  formatMessage(message) {
    return message
      // Headings
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')

      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')

      // Italic
      .replace(/\*(.*?)\*/g, '<em>$1</em>')

      // Lists
      .replace(/^\- (.*$)/gim, '<li>$1</li>')

      // Line breaks
      .replace(/\n/g, '<br>');
  }

  addUserMessage(message) {
    this.addMessage(message, 'user');
  }

  addBotMessage(message) {
    this.addMessage(message, 'bot');
  }

  addMessage(message, sender) {
    const container = document.getElementById('chatbot-messages');

    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${sender}`;

    const contentDiv = document.createElement('div');
    contentDiv.className = `message-content ${sender}`;

    if (sender === 'bot') {
      contentDiv.innerHTML = this.formatMessage(message);
    } else {
      contentDiv.textContent = message;
    }

    messageDiv.appendChild(contentDiv);

    container.appendChild(messageDiv);

    container.scrollTop = container.scrollHeight;
  }

  setLoading(isLoading) {
    const container = document.getElementById('chatbot-messages');

    if (isLoading) {
      const loading = document.createElement('div');

      loading.className = 'chatbot-message bot';
      loading.id = 'loading-indicator';

      loading.innerHTML = `
        <div class="loading-dots">
          <div class="loading-dot"></div>
          <div class="loading-dot"></div>
          <div class="loading-dot"></div>
        </div>
      `;

      container.appendChild(loading);

      container.scrollTop = container.scrollHeight;

    } else {
      const loading = document.getElementById('loading-indicator');

      if (loading) {
        loading.remove();
      }
    }
  }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioChatbot();
});
