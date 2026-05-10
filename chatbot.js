/* =========================
   PORTFOLIO AI CHATBOT
========================= */

class PortfolioChatbot {
  constructor() {
    this.conversationHistory = [];
    // ...other properties...
    this.lastState = 'closed'; // 'open' or 'closed'
    // ... everything else from your current constructor ...
    this.portfolioData = { /* ... same as in your previous file ... */ };
    this.allowedKeywords = [
      "hassan","portfolio","experience","employment","work","job","android","kotlin","jetpack","compose","firebase","retrofit","react native","sqlite","room","api","project","skills","developer","internship","cybersoft","netsol","java","c++","python","github","signage","ecommerce","app"
    ];
  }

  isRelevantQuestion(question) { /* ...same as before... */
    const lowerQuestion = question.toLowerCase();
    return this.allowedKeywords.some(keyword => lowerQuestion.includes(keyword));
  }
  generatePortfolioResponse(question) { /* ...as in your previous file... */
    const q = question.toLowerCase();
    if (q.includes("experience") || q.includes("employment") || q.includes("work") || q.includes("job")) {
      return `\nHassan Khan is currently working as a Junior Android Developer at CyberSoft Solution since August 2024.\n\nResponsibilities include:\n• Android app development using Kotlin\n• REST API integration\n• Banking digital signage application development\n• Internet connectivity monitoring\n• Custom Android launcher development\n• Scheduled rendering functionality\n\nHe also completed an Android Development internship at Netsol Technologies from June 2024 to August 2024.\n      `;
    }
    if (q.includes("skills") || q.includes("technology") || q.includes("tech stack")) {
      return `\nHassan Khan's technical skills include:\n\n• Kotlin\n• Android Development\n• Jetpack Compose\n• Firebase\n• Retrofit\n• REST APIs\n• SQLite\n• Room Database\n• React Native\n• Java\n• C++\n• Python\n• Git & GitHub\n      `;
    }
    if (q.includes("project") || q.includes("application") || q.includes("app")) {
      return `\nHassan Khan has developed multiple projects including:\n\n• Banking Digital Signage Application\n• Andaaz-e-Khas E-commerce Website\n• Student Data App\n• Calculator App\n• Camera Application\n• Word Search Game\n• Weather Forecasting Project\n• Library Management System\n• Notepad Application\n• Number Search Game\n      `;
    }
    if (q.includes("kotlin")) {
      return `\nHassan Khan has strong experience in Kotlin development for Android applications.\n\nHe has worked on:\n• Android applications using Kotlin\n• REST API integration\n• Firebase integration\n• Jetpack Compose UI\n• SQLite and Room Database\n• Dynamic UI development\n      `;
    }
    if (q.includes("jetpack") || q.includes("compose")) {
      return `\nHassan Khan has experience with Jetpack Compose for building modern Android user interfaces.\n\nHe has worked on:\n• Dynamic UI rendering\n• State management\n• Responsive layouts\n• Compose-based Android screens\n      `;
    }
    return `\nHassan Khan is a Computer Science graduate and Android Developer with experience in Kotlin, Jetpack Compose, Firebase, REST APIs, and React Native.\n\nYou can ask about:\n• Skills\n• Work experience\n• Android development\n• Kotlin\n• Projects\n• Firebase\n• Jetpack Compose\n• React Native\n    `;
  }
  async handleMessage(userMessage) {
    const isRelevant = this.isRelevantQuestion(userMessage);
    if (!isRelevant) {
      return `\nI am an AI Assistant for Hassan Khan's portfolio.\n\nPlease ask questions related to:\n• Skills\n• Work experience\n• Android Development\n• Kotlin\n• Jetpack Compose\n• Firebase\n• React Native\n• Projects\n\nSuggested Questions:\n• What technologies does Hassan Khan use?\n• Tell me about Hassan Khan's experience.\n• What projects has Hassan Khan developed?\n• What are Hassan Khan's Android skills?\n      `;
    }
    return this.generatePortfolioResponse(userMessage);
  }

  // === SAFEGUARD for visibility: at least chat toggle or chat window is always visible

  showChatWidget() {
    const widget = document.getElementById('chatbot-widget');
    const btn = document.getElementById('chatbot-toggle');
    if (widget && btn) {
      widget.classList.add('active');
      btn.classList.add('hidden');
      this.lastState = 'open';
    }
  }
  hideChatWidget() {
    const widget = document.getElementById('chatbot-widget');
    const btn = document.getElementById('chatbot-toggle');
    if (widget && btn) {
      widget.classList.remove('active');
      btn.classList.remove('hidden');
      this.lastState = 'closed';
    }
  }

  toggleChat() {
    // Always keeps at least one visible (never both hidden)
    if (this.lastState === 'closed') {
      this.showChatWidget();
      setTimeout(() => {
        const input = document.getElementById('chatbot-input');
        if(input) input.focus();
      }, 300);
    } else {
      this.hideChatWidget();
    }
  }

  // ...other existing chatbot UI, event binding, etc. can call toggleChat() ...
}

const chatbot = new PortfolioChatbot();
// Example for connecting the toggle:
document.addEventListener('DOMContentLoaded', () => {
  // Button with id 'chatbot-toggle' toggles chat:
  const btn = document.getElementById('chatbot-toggle');
  if(btn) btn.onclick = () => chatbot.toggleChat();
  // Close button in widget with id 'chatbot-close':
  const close = document.getElementById('chatbot-close');
  if(close) close.onclick = () => chatbot.toggleChat();

  // Your prompt/input send logic here...
});
