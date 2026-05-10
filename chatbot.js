/* =========================
   INJECT CHATBOT HTML
========================= */
document.body.insertAdjacentHTML('beforeend', `
  <!-- Animated Background -->
  <div class="bg-animated">
    <div class="bg-blob bg-blob-1"></div>
    <div class="bg-blob bg-blob-2"></div>
    <div class="bg-blob bg-blob-3"></div>
    <div class="bg-glow bg-glow-1"></div>
    <div class="bg-glow bg-glow-2"></div>
  </div>

  <!-- Toggle Button -->
  <button class="chatbot-toggle" id="chatbotToggle" title="Chat with AI">💬</button>

  <!-- Chatbot Widget -->
  <div class="chatbot-widget" id="chatbotWidget">
    <div class="chatbot-header">
      <div>
        <div style="font-weight:700;font-size:1rem;">Hassan's AI Assistant</div>
        <div style="font-size:0.75rem;opacity:0.8;">Ask me anything about Hassan</div>
      </div>
      <button class="chatbot-close" id="chatbotClose">✕</button>
    </div>
    <div class="chatbot-messages" id="chatbotMessages">
      <div class="chatbot-message bot">
        <div class="message-content bot">
          👋 Hi! I'm Hassan's AI Assistant.<br><br>
          Ask me about his <strong>skills</strong>, <strong>experience</strong>, or <strong>projects</strong>!
        </div>
      </div>
    </div>
    <div class="chatbot-input-area">
      <input
        class="chatbot-input"
        id="chatbotInput"
        type="text"
        placeholder="Ask about Hassan's skills, projects..."
        autocomplete="off"
      />
      <button class="chatbot-send" id="chatbotSend">➤</button>
    </div>
  </div>
`);

/* =========================
   PORTFOLIO CHATBOT CLASS
========================= */
class PortfolioChatbot {
  constructor() {
    this.conversationHistory = [];

    this.portfolioData = {
      name: "Hassan Khan",
      skills: [
        "Kotlin", "Android Development", "Jetpack Compose", "React Native",
        "Firebase", "Retrofit", "REST APIs", "SQLite", "Room Database",
        "Java", "C++", "Python", "Git", "GitHub"
      ],
      experience: [
        {
          company: "CyberSoft Solution",
          role: "Junior Android Developer",
          duration: "08/2024 - Present",
          responsibilities: [
            "Developed dynamic Android applications",
            "Worked with REST APIs",
            "Implemented internet connectivity monitoring",
            "Created custom Android launcher app",
            "Worked on banking digital signage application",
            "Implemented scheduled rendering and deletion logic"
          ]
        },
        {
          company: "Netsol Technologies",
          role: "Android Development Intern",
          duration: "06/2024 - 08/2024",
          responsibilities: [
            "Developed Android applications using Kotlin",
            "Integrated REST APIs and local storage",
            "Collaborated with mentors and team members",
            "Worked on application testing and debugging"
          ]
        }
      ],
      projects: [
        "Banking Digital Signage Application",
        "Andaaz-e-Khas E-commerce Website",
        "Student Data App", "Calculator App", "Camera Application",
        "Weather Forecasting Project", "Library Management System",
        "Word Search Game", "Notepad Application", "Number Search Game"
      ]
    };

    this.allowedKeywords = [
      "hassan", "portfolio", "experience", "employment", "work", "job",
      "android", "kotlin", "jetpack", "compose", "firebase", "retrofit",
      "react native", "sqlite", "room", "api", "project", "skills",
      "developer", "internship", "cybersoft", "netsol", "java", "c++",
      "python", "github", "signage", "ecommerce", "app", "who", "about",
      "tell", "what", "technology", "tech", "stack", "certificate", "contact"
    ];
  }

  isRelevantQuestion(question) {
    const lowerQuestion = question.toLowerCase();
    return this.allowedKeywords.some(keyword => lowerQuestion.includes(keyword));
  }

  generatePortfolioResponse(question) {
    const q = question.toLowerCase();

    if (q.includes("experience") || q.includes("employment") || q.includes("work") || q.includes("job")) {
      return `<strong>Hassan Khan's Work Experience</strong><br><br>
🏢 <strong>CyberSoft Solution</strong> — Junior Android Developer<br>
📅 August 2024 – Present<br>
<ul>
  <li>Android app development using Kotlin</li>
  <li>REST API integration</li>
  <li>Banking digital signage application</li>
  <li>Custom Android launcher development</li>
  <li>Internet connectivity monitoring</li>
</ul><br>
🏢 <strong>Netsol Technologies</strong> — Android Intern<br>
📅 June 2024 – August 2024<br>
<ul>
  <li>Developed Android apps using Kotlin</li>
  <li>REST API & local storage integration</li>
  <li>App testing and debugging</li>
</ul>`;
    }

    if (q.includes("skills") || q.includes("technology") || q.includes("tech stack") || q.includes("tech")) {
      return `<strong>Hassan Khan's Technical Skills</strong><br><br>
📱 <strong>Android:</strong> Kotlin, Jetpack Compose, XML, MVVM<br>
🔗 <strong>Backend & Data:</strong> Retrofit, Firebase, REST APIs, Room, SQLite<br>
💻 <strong>Other Languages:</strong> Java, C++, Python, React Native<br>
🛠️ <strong>Tools:</strong> Git, GitHub, Android Studio, VS Code`;
    }

    if (q.includes("project") || q.includes("application") || q.includes("app")) {
      return `<strong>Hassan Khan's Projects</strong><br><br>
<ul>
  <li>🏦 Banking Digital Signage Application</li>
  <li>🛒 Andaaz-e-Khas E-commerce Website</li>
  <li>🌤️ Weather Forecasting App</li>
  <li>📱 Custom Android Launcher</li>
  <li>🔐 Login & User Management App</li>
  <li>📚 Library Management System</li>
  <li>🎮 Word Search & Number Search Games</li>
  <li>📝 Notepad & Calculator Apps</li>
</ul>`;
    }

    if (q.includes("kotlin")) {
      return `<strong>Kotlin Experience</strong><br><br>
Hassan has strong hands-on experience with Kotlin, including:<br><ul>
  <li>Jetpack Compose UI development</li>
  <li>REST API integration with Retrofit</li>
  <li>Firebase Authentication</li>
  <li>Room & SQLite databases</li>
  <li>Coroutines & Flow</li>
</ul>`;
    }

    if (q.includes("jetpack") || q.includes("compose")) {
      return `<strong>Jetpack Compose</strong><br><br>
Hassan uses Jetpack Compose to build modern Android UIs:<br><ul>
  <li>Dynamic UI rendering</li>
  <li>State management</li>
  <li>Responsive layouts</li>
  <li>Used in the Bank Signage App</li>
</ul>`;
    }

    if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
      return `<strong>Contact Hassan Khan</strong><br><br>
📧 <strong>Email:</strong> hassankhan74812@gmail.com<br>
💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hassan-khan-964265260/" target="_blank" style="color:#60a5fa;">linkedin.com/in/hassan-khan</a><br>
🐙 <strong>GitHub:</strong> <a href="https://github.com/HassanKhanO1" target="_blank" style="color:#60a5fa;">github.com/HassanKhanO1</a>`;
    }

    if (q.includes("certificate") || q.includes("cert")) {
      return `<strong>Certificates</strong><br><br>
🏅 ICAN Certificate<br>
🏅 Netsol Internship Certificate`;
    }

    if (q.includes("who") || q.includes("about") || q.includes("tell")) {
      return `<strong>About Hassan Khan</strong><br><br>
Hassan is an Android Developer with 1.5+ years of experience building high-quality Android applications.<br><br>
He specialises in <strong>Kotlin</strong>, <strong>Jetpack Compose</strong>, <strong>MVVM architecture</strong>, REST API integration, and offline caching with Room/SQLite.<br><br>
Currently working at <strong>CyberSoft Solution</strong> as a Junior Android Developer.`;
    }

    return `I can help you learn about Hassan Khan!<br><br>
Try asking about:<br>
• <strong>Skills</strong> — What technologies does he use?<br>
• <strong>Experience</strong> — Where has he worked?<br>
• <strong>Projects</strong> — What apps has he built?<br>
• <strong>Contact</strong> — How to reach him?`;
  }

  async handleMessage(userMessage) {
    const isRelevant = this.isRelevantQuestion(userMessage);
    if (!isRelevant) {
      return `I'm Hassan's portfolio assistant — I can only answer questions about him.<br><br>
Try asking:<br>
• What are Hassan's skills?<br>
• Tell me about his experience<br>
• What projects has he built?`;
    }
    return this.generatePortfolioResponse(userMessage);
  }
}

/* =========================
   CHATBOT UI CONTROLLER
========================= */
const chatbot      = new PortfolioChatbot();
const toggleBtn    = document.getElementById('chatbotToggle');
const widget       = document.getElementById('chatbotWidget');
const closeBtn     = document.getElementById('chatbotClose');
const input        = document.getElementById('chatbotInput');
const sendBtn      = document.getElementById('chatbotSend');
const messagesDiv  = document.getElementById('chatbotMessages');

function openChat() {
  widget.classList.add('active');
  toggleBtn.classList.add('hidden');
  input.focus();
}

function closeChat() {
  widget.classList.remove('active');
  toggleBtn.classList.remove('hidden');
}

toggleBtn.addEventListener('click', openChat);
closeBtn.addEventListener('click', closeChat);

function appendMessage(html, sender) {
  const wrapper = document.createElement('div');
  wrapper.className = `chatbot-message ${sender}`;
  const bubble = document.createElement('div');
  bubble.className = `message-content ${sender}`;
  bubble.innerHTML = html;
  wrapper.appendChild(bubble);
  messagesDiv.appendChild(wrapper);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function showLoading() {
  const wrapper = document.createElement('div');
  wrapper.className = 'chatbot-message bot';
  wrapper.id = 'loadingIndicator';
  wrapper.innerHTML = `
    <div class="message-content bot">
      <div class="loading-dots">
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
      </div>
    </div>`;
  messagesDiv.appendChild(wrapper);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function removeLoading() {
  const loader = document.getElementById('loadingIndicator');
  if (loader) loader.remove();
}

async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  appendMessage(text, 'user');
  input.value = '';
  sendBtn.disabled = true;

  showLoading();

  // Small delay for natural feel
  await new Promise(r => setTimeout(r, 600));

  const response = await chatbot.handleMessage(text);
  removeLoading();
  appendMessage(response, 'bot');
  sendBtn.disabled = false;
  input.focus();
}

sendBtn.addEventListener('click', sendMessage);
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') sendMessage();
});
