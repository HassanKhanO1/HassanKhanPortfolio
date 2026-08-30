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
          Ask me about his <strong>skills</strong>, <strong>experience</strong>, <strong>Machine Learning journey</strong>, or <strong>projects</strong>!
        </div>
      </div>
    </div>
    <div class="chatbot-input-area">
      <input
        class="chatbot-input"
        id="chatbotInput"
        type="text"
        placeholder="Ask about Hassan's skills, projects, or ML experience..."
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
      background: "BSCS degree holder with Android development experience and developing practical expertise in Machine Learning and AI/ML engineering.",
      androidSkills: [
        "Kotlin", "Android Development", "Jetpack Compose", "React Native",
        "Firebase", "Retrofit", "REST APIs", "SQLite", "Room Database",
        "Java", "C++", "Python", "Git", "GitHub"
      ],
      mlSkills: [
        "Supervised Learning", "Unsupervised Learning", "Linear Regression",
        "Logistic Regression", "Cost/Loss Functions", "Gradient Descent",
        "Classification", "Clustering", "Feature Engineering", "Feature Scaling",
        "Data Preprocessing", "Model Evaluation", "Neural Networks",
        "Neurons", "Weights and Biases", "Activation Functions",
        "Forward Propagation", "Backpropagation", "Tensors", "TensorFlow",
        "NLP Fundamentals", "LLM Concepts", "Embeddings", "Semantic Search",
        "Vector Databases", "Retrieval-Augmented Generation (RAG)", "Python",
        "NumPy", "Pandas", "Scikit-learn"
      ],
      mlLearningDirection: "Progressing from classical Machine Learning toward Deep Learning, NLP, LLMs, RAG, Semantic Search, Vector Databases, and AI Agents.",
      mlCertificates: [
        "Machine Learning",
        "Advanced Learning Algorithms"
      ],
      androidExperience: [
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
      "tell", "what", "technology", "tech", "stack", "certificate", "contact",
      "machine learning", "ml", "artificial intelligence", "ai", "neural", 
      "network", "tensorflow", "scikit", "pandas", "numpy", "deep learning",
      "supervised", "unsupervised", "regression", "classification", "clustering",
      "nlp", "llm", "rag", "semantic", "embedding", "vector", "database",
      "learning", "algorithm", "model", "training", "feature", "engineering"
    ];
  }

  isRelevantQuestion(question) {
    const lowerQuestion = question.toLowerCase();
    return this.allowedKeywords.some(keyword => lowerQuestion.includes(keyword));
  }

  generatePortfolioResponse(question) {
    const q = question.toLowerCase();

    // Machine Learning Experience
    if (q.includes("machine learning") || (q.includes("ml") && !q.includes("html"))) {
      return `<strong>Hassan's Machine Learning Experience</strong><br><br>
🤖 Hassan is <strong>developing practical expertise in Machine Learning and AI/ML engineering</strong> through hands-on projects and structured learning.<br><br>
<strong>ML Skills & Knowledge:</strong><br>
• Supervised & Unsupervised Learning<br>
• Linear & Logistic Regression<br>
• Cost Functions & Gradient Descent<br>
• Classification & Clustering<br>
• Neural Networks (neurons, weights, biases, activation functions)<br>
• Forward & Backpropagation<br>
• TensorFlow & Tensors<br>
• NLP & LLM Concepts<br>
• Embeddings & Semantic Search<br>
• Vector Databases & RAG<br>
• Feature Engineering & Data Preprocessing<br>
• Model Evaluation<br><br>
<strong>ML Certificates:</strong> Machine Learning, Advanced Learning Algorithms<br><br>
<strong>Current Direction:</strong> Progressing toward Deep Learning, NLP, LLMs, RAG, Semantic Search, Vector Databases, and AI Agents.`;
    }

    if (q.includes("ai") || q.includes("artificial intelligence")) {
      return `<strong>Hassan's AI/ML Journey</strong><br><br>
Hassan is <strong>currently transitioning toward AI/ML Engineering</strong> while leveraging his Android development background.<br><br>
<strong>What he's learning:</strong><br>
• Deep Learning & Neural Networks<br>
• Large Language Models (LLMs)<br>
• Natural Language Processing (NLP)<br>
• Retrieval-Augmented Generation (RAG)<br>
• Semantic Search & Vector Databases<br><br>
<strong>Combined Expertise:</strong> He's building <strong>AI-powered applications</strong> using Python, REST APIs, Android, React Native, and Firebase to create practical, deployable solutions.`;
    }

    if (q.includes("neural") || q.includes("network")) {
      return `<strong>Neural Networks & Deep Learning</strong><br><br>
Hassan has hands-on understanding of:<br>
• Neurons, weights, and biases<br>
• Activation functions<br>
• Forward Propagation<br>
• Backpropagation fundamentals<br>
• Tensors and TensorFlow<br>
• Building and training neural network models<br><br>
He's currently applying these concepts through end-to-end ML projects focusing on real-world prediction, classification, NLP, and deep-learning applications.`;
    }

    if (q.includes("tensorflow") || q.includes("tensor")) {
      return `<strong>TensorFlow & Tensors</strong><br><br>
Hassan has practical experience with:<br>
• TensorFlow framework<br>
• Working with tensors<br>
• Building neural network models<br>
• Model training and optimization<br><br>
He's built a foundation for developing and training neural-network models with TensorFlow as part of his ML learning journey.`;
    }

    if (q.includes("nlp") || q.includes("natural language")) {
      return `<strong>Natural Language Processing (NLP)</strong><br><br>
Hassan is <strong>expanding expertise toward NLP</strong>, including:<br>
• NLP fundamentals<br>
• Large Language Model (LLM) concepts<br>
• Embeddings<br>
• Semantic Search<br>
• Vector Databases for semantic similarity<br>
• Retrieval-Augmented Generation (RAG)<br><br>
He's building practical NLP projects to apply these concepts to real-world problems.`;
    }

    if (q.includes("llm") || q.includes("large language")) {
      return `<strong>Large Language Models (LLMs) & RAG</strong><br><br>
Hassan is developing knowledge in:<br>
• Large Language Model concepts<br>
• Embeddings and semantic representations<br>
• Vector Databases for efficient retrieval<br>
• Retrieval-Augmented Generation (RAG) systems<br>
• Semantic Search techniques<br><br>
He's exploring how to combine LLMs with custom data sources using RAG for building intelligent, context-aware applications.`;
    }

    if (q.includes("certificate") || q.includes("cert")) {
      return `<strong>Certificates</strong><br><br>
🏅 <strong>Machine Learning</strong> — Hands-on ML fundamentals and practical implementation<br>
🏅 <strong>Advanced Learning Algorithms</strong> — Neural Networks and Deep Learning<br>
🏅 ICAN Certificate<br>
🏅 Netsol Internship Certificate<br><br>
Hassan continues learning and expanding his AI/ML expertise through structured courses and hands-on projects.`;
    }

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
💻 <strong>Languages:</strong> Java, C++, Python, React Native<br>
🤖 <strong>Machine Learning:</strong> Supervised/Unsupervised Learning, Neural Networks, TensorFlow, Scikit-learn, Feature Engineering, NLP, LLMs<br>
🛠️ <strong>Tools:</strong> Git, GitHub, Android Studio, VS Code, Jupyter`;
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

    if (q.includes("who") || q.includes("about") || q.includes("tell")) {
      return `<strong>About Hassan Khan</strong><br><br>
Hassan is an Android Developer with 1.5+ years of experience building high-quality Android applications. He specializes in <strong>Kotlin</strong>, <strong>Jetpack Compose</strong>, <strong>MVVM architecture</strong>, REST API integration, and offline caching.<br><br>
<strong>Growing Focus:</strong> He's also <strong>developing practical expertise in Machine Learning and AI/ML engineering</strong> through hands-on projects, currently exploring Neural Networks, Deep Learning, NLP, and LLMs.<br><br>
Currently working at <strong>CyberSoft Solution</strong> as a Junior Android Developer.`;
    }

    return `I can help you learn about Hassan Khan!<br><br>
Try asking about:<br>
• <strong>Skills</strong> — What technologies does he use?<br>
• <strong>Experience</strong> — Where has he worked?<br>
• <strong>Projects</strong> — What apps has he built?<br>
• <strong>Machine Learning</strong> — What's his ML expertise?<br>
• <strong>Contact</strong> — How to reach him?`;
  }

  async handleMessage(userMessage) {
    const isRelevant = this.isRelevantQuestion(userMessage);
    if (!isRelevant) {
      return `I'm Hassan's portfolio assistant — I can only answer questions about him.<br><br>
Try asking:<br>
• What are Hassan's skills?<br>
• Tell me about his experience<br>
��� What projects has he built?<br>
• Does he have Machine Learning experience?`;
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