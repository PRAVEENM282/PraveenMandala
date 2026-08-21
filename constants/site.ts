export const RESUME_URL =
  "https://drive.google.com/file/d/1C4-IFqtmUdhTK3VJi7P2auXBTwntNHfO/view?usp=drive_link";

export const siteConfig = {
  name: "Praveen Mandala",
  title: "Praveen Mandala — AI Engineer & Backend Engineer",
  subtitle: "AI Engineer · Backend Engineer · Distributed Systems Enthusiast",
  heroSubheadline:
    "I build dependable AI and backend systems—from grounded RAG pipelines to event-driven infrastructure that is built to be measured, operated, and improved.",
  description:
    "Computer Science student focused on Generative AI, backend engineering, and distributed systems.",
  url: "https://praveenmandala.com",
  email: "praveenm0088@gmail.com",
  phone: "+91 807 453 0460",
  location: "Andhra Pradesh, India",
  education: "B.Tech in Computer Science & Engineering · 2023–2027",
  institution: "Aditya College of Engineering & Technology",
  cgpa: "8.65 / 10"
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
] as const;

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/PRAVEENM282" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/praveen-mandala-8b7251291/" },
  { label: "Email", href: "mailto:praveenm0088@gmail.com" }
] as const;

export type ExpertiseGroup = { category: string; description: string; items: string[] };

export const expertise: ExpertiseGroup[] = [
  { category: "AI & LLMs", description: "Grounded generation, evaluation, and model-driven product systems.", items: ["Generative AI", "LLMs", "RAG", "NLP", "Prompt Engineering", "Agentic AI", "LangChain", "LangGraph", "Hugging Face", "PyTorch", "Vector Search", "pgvector", "OpenAI API", "Gemini API"] },
  { category: "Backend Systems", description: "APIs and services designed around reliability, throughput, and clear boundaries.", items: ["Python", "FastAPI", "Node.js", "Express.js", "REST APIs", "Microservices", "Kafka", "RabbitMQ", "Redis", "Celery"] },
  { category: "Databases", description: "Choosing storage and access patterns that match the system's consistency needs.", items: ["PostgreSQL", "MySQL", "MongoDB", "RocksDB", "SQL", "Cache-aside patterns"] },
  { category: "Cloud & DevOps", description: "Repeatable delivery and containerized infrastructure for services that need to run well.", items: ["AWS EC2", "AWS S3", "Docker", "Docker Compose", "Kubernetes", "CI/CD", "Linux", "Git", "GitHub"] },
  { category: "Programming Languages", description: "Strong fundamentals across application, systems, and problem-solving contexts.", items: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL"] }
];

export type Project = {
  title: string;
  eyebrow: string;
  problem: string;
  architecture: string[];
  decisions: string[];
  stage: "retrieval" | "evaluation" | "feature-store" | "nlp";
  technologies: string[];
  impact: string[];
  github: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  { title: "IntelliSupport", eyebrow: "RAG customer support platform", problem: "Enterprise support answers need to be grounded in internal knowledge instead of generated from model memory alone.", architecture: ["Hybrid retrieval combines semantic search with BM25 keyword matching.", "Intent classification and reranking select context before answer generation.", "FastAPI coordinates PostgreSQL, pgvector, and OpenAI API workflows."], decisions: ["Use hybrid retrieval to protect recall when terminology is domain-specific.", "Measure faithfulness and relevance separately so retrieval and generation regressions stay visible."], stage: "retrieval", technologies: ["FastAPI", "PostgreSQL", "pgvector", "OpenAI", "RAG"], impact: ["85% retrieval hit rate", "90% intent accuracy", "88% faithfulness · 82% relevance"], github: "https://github.com/PRAVEENM282/intellisupport", featured: true },
  { title: "LLM Evaluation Framework", eyebrow: "LLM benchmarking platform", problem: "RAG and LLM applications need repeatable evaluation before model, prompt, or retrieval changes reach users.", architecture: ["Modular evaluation pipeline supports LLM-as-a-Judge and deterministic metrics.", "Benchmarks OpenAI and Gemini responses across providers and prompting strategies.", "Docker-based CI automates continuous model and prompt validation."], decisions: ["Combine model-based judgment with lexical and embedding metrics instead of trusting one score.", "Run evaluation in CI so prompt changes are reviewed like code changes."], stage: "evaluation", technologies: ["Python", "OpenAI", "Gemini", "RAG", "Docker", "CI/CD"], impact: ["Faithfulness, context relevancy, and answer relevancy", "BLEU, ROUGE, and BERTScore coverage", "Continuous evaluation in the delivery workflow"], github: "https://github.com/PRAVEENM282/llm-evaluation-framework", live: "https://praveenmandala.com/llm-evaluation", featured: true },
  { title: "Real-Time Feature Store", eyebrow: "MLOps infrastructure", problem: "Real-time models need fresh features with low-latency reads while retaining durable historical data for analysis and recovery.", architecture: ["Kafka and Faust process feature events asynchronously.", "Redis serves online features while PostgreSQL stores durable history.", "Idempotent persistence and cache-aside fallback protect serving paths."], decisions: ["Split online and historical storage so serving latency does not depend on analytical queries.", "Make writes idempotent and keep a cache-aside fallback for degraded reads."], stage: "feature-store", technologies: ["Kafka", "Faust", "RocksDB", "Redis", "PostgreSQL", "FastAPI", "Docker Compose"], impact: ["Dual-storage serving model", "Low-latency online feature access", "Containerized event-driven deployment"], github: "https://github.com/PRAVEENM282/realtime-feature-store", live: "https://praveenmandala.com/feature-store", featured: true },
  { title: "NLP-Service", eyebrow: "Asynchronous NLP pipeline", problem: "Model inference should not block HTTP requests when NLP jobs can be processed asynchronously in the background.", architecture: ["FastAPI accepts jobs and publishes work to RabbitMQ.", "Celery workers decouple inference from request lifecycles.", "PostgreSQL stores job and result state for reliable access."], decisions: ["Move inference behind a queue so HTTP latency is independent of model runtime.", "Persist job state so clients can inspect results without holding an open request."], stage: "nlp", technologies: ["FastAPI", "Celery", "RabbitMQ", "PostgreSQL", "Docker Compose"], impact: ["Background sentiment analysis", "Named entity recognition pipeline", "Queue-based, containerized inference"], github: "https://github.com/PRAVEENM282/nlp-service", featured: true }
];

export type ExperienceItem = { role: string; company: string; period: string; summary: string; highlights: string[]; technologies: string[] };

export const experience: ExperienceItem[] = [{ role: "Full Stack Developer Intern", company: "Zengen Technologies", period: "May 2025 – Aug 2025", summary: "Built secure authentication and authorization services and connected them to business modules in an Agile product team.", highlights: ["Designed OAuth 2.0 and JWT authentication APIs with refresh-token rotation and role-based access control.", "Implemented bcrypt hashing, token expiry, rate limiting, request validation, and JWT verification middleware.", "Collaborated across feature development, testing, debugging, and deployment workflows."], technologies: ["Node.js", "Express.js", "OAuth 2.0", "JWT", "REST APIs"] }];

export const achievements = [
  { value: "20+", label: "Public GitHub repositories", detail: "Generative AI, RAG, backend engineering, and MLOps" },
  { value: "300+", label: "DSA problems solved", detail: "LeetCode and GeeksforGeeks" },
  { value: "4", label: "HackerRank certifications", detail: "Java, Python, JavaScript, and MySQL" },
  { value: "4", label: "AI and backend systems", detail: "Featured projects with architecture-first write-ups" }
] as const;
