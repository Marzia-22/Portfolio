/* ─────────────────────────────────────────────────────────
   data/content.ts
   Single source of truth for all portfolio content.
   Update this file to keep the site in sync with your resume.
   ───────────────────────────────────────────────────────── */

export const profile = {
  name: "Marzia Tasneem",
  initials: "MT",
  title: "Computer Science & Engineering Student",
  university: "KLH University, Hyderabad",
  degree: "B.Tech in Computer Science & Engineering",
  period: "2024 to 2028",
  year: "Third Year",
  cgpa: "9.65 / 10",
  location: "Hyderabad, India",
  linkedin: "https://www.linkedin.com/in/marzia-tasneem-b2423b314/",
  github: "https://github.com/Marzia-22/",
  // Add your email below when ready
  email: null as string | null,
};

export const bio = `I am Marzia Tasneem, a third-year Computer Science and Engineering student at KLH University in Hyderabad.

My core work is Java, DSA, and full-stack development. Projects such as Aesthio and GENIE are where I test ideas by building working software, not just prototypes.

I am interested in practical AI-powered applications and in understanding the systems behind the products I build. My Full Stack Development internship at Thiranex gave me experience working with responsive interfaces, backend logic, version control, and team workflows.`;

/* ─── Experience ─────────────────────────────────────────── */
export const experience = [
  {
    company: "Thiranex",
    role: "Full Stack Development Intern",
    type: "Internship",
    description:
      "Worked on full-stack web applications, developing responsive user interfaces, implementing backend logic, and integrating frontend and backend systems. Practised version control, participated in code reviews, and learned team workflows through agile development.",
    highlights: [
      "Built responsive UI components and integrated them with backend APIs",
      "Implemented backend logic for web application features",
      "Worked with Git-based version control and participated in code reviews",
      "Collaborated with team members on scalable, maintainable solutions",
      "Followed agile development practices and sprint workflows",
    ],
  },
];

/* ─── Projects ───────────────────────────────────────────── */
export const projects = {
  aesthio: {
    name: "Aesthio",
    tagline: "AI-Powered Aesthetic Discovery Platform",
    status: "In Progress",
    statusType: "progress" as const,
    description:
      "A full-stack social platform for discovering, sharing, and creating aesthetic content. Built with a focus on real-time interactions, secure data access, and AI-driven creative features.",
    problem:
      "Discovering and organizing aesthetic visual content online is scattered across dozens of platforms with no cohesive, user-owned experience. Aesthio brings aesthetic discovery, curation, and AI-assisted creation into one focused space.",
    features: [
      { label: "Authentication", detail: "Email auth + Google OAuth" },
      { label: "Social Graph", detail: "Follow / follower system" },
      { label: "Content Feed", detail: "Masonry layout with real-time updates" },
      { label: "User Actions", detail: "Likes, saves, post management" },
      { label: "Security", detail: "Row-Level Security via Supabase" },
      { label: "Routing", detail: "Protected routes & user profiles" },
    ],
    aiFeatures: [
      "AI-generated moodboards using OpenAI APIs",
      "Automated color palette extraction & suggestions",
      "Design keyword generation from visual content",
      "Personalized visual recommendations",
    ],
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Supabase", "PostgreSQL", "OpenAI"],
    deployment: ["Vercel", "GitHub CI/CD"],
    github: null as string | null, // Add your repo URL here
    live: null as string | null,   // Add your live URL here
  },

  genie: {
    name: "GENIE",
    tagline: "Smart Learning Companion",
    event: "HackRevolution 2025, MJCET",
    achievement: "4th Place, Smart Education Track",
    description:
      "An intelligent education platform built for HackRevolution 2025. GENIE provides personalized learning support and adaptive guidance for students, helping them track progress, receive targeted recommendations, and get real-time feedback.",
    features: [
      "Personalized learning paths based on student profile",
      "Adaptive guidance that adjusts to progress",
      "Progress tracking dashboard",
      "Personalized content recommendations",
      "Real-time feedback on learning activities",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: null as string | null,
    live: null as string | null,
  },

  careerRec: {
    name: "Career Recommendation Platform",
    type: "Academic Project",
    tagline: "Skill-Based Career Path Explorer",
    description:
      "A web-based platform that suggests career paths based on a user's skills, interests, and preferences. It uses a step-by-step flow from skill input to structured career results.",
    features: [
      "Responsive interface across devices",
      "Guided input flow for skills and interests",
      "Personalized career path suggestions via REST APIs",
      "Structured result presentation with career context",
    ],
    stack: ["HTML", "CSS", "JavaScript", "REST APIs"],
    github: null as string | null,
  },

  nasaSpaceApps: {
    name: "NASA Space Apps Hyderabad",
    type: "Open Source Contribution",
    tagline: "Website Contribution, NASA Space Apps 2026",
    description:
      "Contributed to the official website for NASA Space Apps Hyderabad 2026. This was a collaborative project with other contributors.",
    note: "Contribution details and repository link to be added.",
    github: null as string | null,
  },
};

/* ─── Skills ─────────────────────────────────────────────── */
export const skills = {
  languages: ["Java", "Python", "C / C++", "JavaScript", "TypeScript"],
  frontend: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  backend: ["Node.js", "Express", "Supabase", "PostgreSQL", "Firebase", "MongoDB"],
  tools: ["Git", "GitHub", "Vercel", "AWS Basics", "Docker"],
  concepts: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Cloud Computing",
    "AI / ML Fundamentals",
  ],
};

/* ─── Achievements ───────────────────────────────────────── */
export const achievements = [
  {
    title: "4th Place, Smart Education Track",
    event: "HackRevolution 2025, MJCET",
    detail: "Built GENIE, an adaptive learning platform, as part of a hackathon team.",
    highlight: true,
  },
  {
    title: "Selected Among 234 Teams",
    event: "Open Innovation Software Hackathon, MJCET",
    detail: "Project selected out of 234 competing teams in the open software category.",
    highlight: false,
  },
  {
    title: "Presented AI Kacheri",
    event: "Microsoft Hyderabad, Bhashini Initiative",
    detail: "Presented an AI project at Microsoft Hyderabad as part of the Bhashini language initiative.",
    highlight: false,
  },
  {
    title: "Participated, Decode & Display",
    event: "University of Hyderabad",
    detail: "Participated in the Decode & Display technical event.",
    highlight: false,
  },
  {
    title: "9.65 / 10 CGPA",
    event: "KLH University, B.Tech CSE",
    detail: "Maintaining academic excellence across all semesters.",
    highlight: false,
  },
];

/* ─── Certifications ─────────────────────────────────────── */
export const certifications = [
  {
    name: "PCAP: Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
  },
  {
    name: "Automation Anywhere Certified, RPA Fundamentals",
    issuer: "Automation Anywhere",
  },
  {
    name: "Full Stack Web Development",
    issuer: "Platform to be confirmed",
  },
];

/* ─── Currently Learning ─────────────────────────────────── */
export const learning = [
  { label: "Data Structures & Algorithms", note: "Deep practice" },
  { label: "Advanced React & Next.js", note: "Patterns & performance" },
  { label: "AWS / Cloud Computing", note: "Fundamentals" },
  { label: "UI/UX & Figma", note: "Design skills" },
  { label: "Open-Source Contribution", note: "Getting started" },
  { label: "Production-ready systems", note: "Architecture & deployment" },
];
