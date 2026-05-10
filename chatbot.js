/* =========================
   PORTFOLIO AI CHATBOT
========================= */

class PortfolioChatbot {
  constructor() {
    this.conversationHistory = [];

    /* =========================
       PORTFOLIO KNOWLEDGE BASE
    ========================= */

    this.portfolioData = {
      name: "Hassan Khan",

      skills: [
        "Kotlin",
        "Android Development",
        "Jetpack Compose",
        "React Native",
        "Firebase",
        "Retrofit",
        "REST APIs",
        "SQLite",
        "Room Database",
        "Java",
        "C++",
        "Python",
        "Git",
        "GitHub"
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
        "Student Data App",
        "Calculator App",
        "Camera Application",
        "Weather Forecasting Project",
        "Library Management System",
        "Word Search Game",
        "Notepad Application",
        "Number Search Game"
      ]
    };

    /* =========================
       ALLOWED KEYWORDS
    ========================= */

    this.allowedKeywords = [
      "hassan",
      "portfolio",
      "experience",
      "employment",
      "work",
      "job",
      "android",
      "kotlin",
      "jetpack",
      "compose",
      "firebase",
      "retrofit",
      "react native",
      "sqlite",
      "room",
      "api",
      "project",
      "skills",
      "developer",
      "internship",
      "cybersoft",
      "netsol",
      "java",
      "c++",
      "python",
      "github",
      "signage",
      "ecommerce",
      "app"
    ];
  }

  /* =========================
     CHECK QUESTION RELEVANCY
  ========================= */

  isRelevantQuestion(question) {
    const lowerQuestion = question.toLowerCase();

    return this.allowedKeywords.some(keyword =>
      lowerQuestion.includes(keyword)
    );
  }

  /* =========================
     GENERATE PORTFOLIO RESPONSE
  ========================= */

  generatePortfolioResponse(question) {
    const q = question.toLowerCase();

    /* ===== EXPERIENCE ===== */

    if (
      q.includes("experience") ||
      q.includes("employment") ||
      q.includes("work") ||
      q.includes("job")
    ) {
      return `
Hassan Khan is currently working as a Junior Android Developer at CyberSoft Solution since August 2024.

Responsibilities include:
• Android app development using Kotlin
• REST API integration
• Banking digital signage application development
• Internet connectivity monitoring
• Custom Android launcher development
• Scheduled rendering functionality

He also completed an Android Development internship at Netsol Technologies from June 2024 to August 2024.
      `;
    }

    /* ===== SKILLS ===== */

    if (
      q.includes("skills") ||
      q.includes("technology") ||
      q.includes("tech stack")
    ) {
      return `
Hassan Khan's technical skills include:

• Kotlin
• Android Development
• Jetpack Compose
• Firebase
• Retrofit
• REST APIs
• SQLite
• Room Database
• React Native
• Java
• C++
• Python
• Git & GitHub
      `;
    }

    /* ===== PROJECTS ===== */

    if (
      q.includes("project") ||
      q.includes("application") ||
      q.includes("app")
    ) {
      return `
Hassan Khan has developed multiple projects including:

• Banking Digital Signage Application
• Andaaz-e-Khas E-commerce Website
• Student Data App
• Calculator App
• Camera Application
• Word Search Game
• Weather Forecasting Project
• Library Management System
• Notepad Application
• Number Search Game
      `;
    }

    /* ===== KOTLIN ===== */

    if (q.includes("kotlin")) {
      return `
Hassan Khan has strong experience in Kotlin development for Android applications.

He has worked on:
• Android applications using Kotlin
• REST API integration
• Firebase integration
• Jetpack Compose UI
• SQLite and Room Database
• Dynamic UI development
      `;
    }

    /* ===== JETPACK COMPOSE ===== */

    if (
      q.includes("jetpack") ||
      q.includes("compose")
    ) {
      return `
Hassan Khan has experience with Jetpack Compose for building modern Android user interfaces.

He has worked on:
• Dynamic UI rendering
• State management
• Responsive layouts
• Compose-based Android screens
      `;
    }

    /* ===== DEFAULT PORTFOLIO RESPONSE ===== */

    return `
Hassan Khan is a Computer Science graduate and Android Developer with experience in Kotlin, Jetpack Compose, Firebase, REST APIs, and React Native.

You can ask about:
• Skills
• Work experience
• Android development
• Kotlin
• Projects
• Firebase
• Jetpack Compose
• React Native
    `;
  }

  /* =========================
     HANDLE USER MESSAGE
  ========================= */

  async handleMessage(userMessage) {
    const isRelevant = this.isRelevantQuestion(userMessage);

    /* ===== REJECT IRRELEVANT QUESTIONS ===== */

    if (!isRelevant) {
      return `
I am an AI Assistant for Hassan Khan's portfolio.

Please ask questions related to:
• Skills
• Work experience
• Android Development
• Kotlin
• Jetpack Compose
• Firebase
• React Native
• Projects

Suggested Questions:
• What technologies does Hassan Khan use?
• Tell me about Hassan Khan's experience.
• What projects has Hassan Khan developed?
• What are Hassan Khan's Android skills?
      `;
    }

    /* ===== GENERATE RELEVANT RESPONSE ===== */

    return this.generatePortfolioResponse(userMessage);
  }
}

/* =========================
   INITIALIZE CHATBOT
========================= */

const chatbot = new PortfolioChatbot();

/* =========================
   EXAMPLE USAGE
========================= */

async function askQuestion() {
  const input = document.getElementById("userInput").value;

  const response = await chatbot.handleMessage(input);

  document.getElementById("chatResponse").innerHTML = response;
}
