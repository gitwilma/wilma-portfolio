import type { WorkItem } from "./types";

export const workItems: WorkItem[] = [
  {
    id: "frontend",
    type: "experience",
    category: "Frontend Developer",
    title: "Work experience",
    description:
      "Frontend roles focused on production work, maintainable code and collaboration with UX and development teams.",
    hint: "Click to read more",
    entries: [
      {
        id: "stena-metall",
        company: "Stena Metall",
        role: "Frontend Developer",
        companyLogoSrc: "/stena-logo.svg",
        imageSrc: "/stena-office.svg",
        imageAlt: "Stena Metall office",
        summary: 
          "Worked on a Learning Hub feature from concept to production, focusing on responsive interfaces and clear user flows across tablet and mobile. Collaborated closely with UX and developers, owning features end-to-end and contributing to structured, maintainable solutions in a complex system environment.",
        details: [
          "Developed responsive tablet and mobile views based on UX designs ",
          "Translated requirements into clear, user-friendly interfaces ",
          "Owned features from requirements to implementation",
          "Integrated frontend with backend APIs in a complex system",
          "Contributed to improved team structure and communication",
        ],
        skills: [
          { id: "react", label: "React" },
          { id: "typescript", label: "TypeScript" },
          { id: "css", label: "CSS" },
        ],
      },
    ],
  },

   {
    id: "content",
    type: "content",
    category: "Content & Branding",
    title: "Freelance Content Creator",
    description:
      "Social media, branding, and digital storytelling focused on authentic content and audience connection.",
    hint: "Click to read more",
    entries: [
      {
        id: "campaign-1",
        title: "Social media, branding, and digital storytelling focused on authentic content and audience connection.",
        summary:
          "Currently freelancing as a Content Creator, working with social media, branding, and digital storytelling. I create both organic and promotional content tailored to the right audience, while also working with strategy, planning, visual identity, and brand presence across digital platforms.",
        images: [
          { id: "img-1", src: "./BYTTAN-PORTFOLIO.png", alt: "", url: "https://www.instagram.com/byttaniparken/" },
          { id: "img-2", src: "./CHOCO-BERRY-PORTFOLIO.png", alt: "", url: "https://www.instagram.com/chocoberry.swe/" },
          { id: "img-3", src: "./EPOK-PORTFOLIO.png", alt: "", url: "https://www.instagram.com/epokoland/" },
          { id: "img-4", src: "./TACOS-PORTFOLIO.png", alt: "", url: "" },
        ],
      },
    ],
  },
 
  {
    id: "projects",
    type: "projects",
    category: "Projects",
    title: "Side projects",
    description:
      "A selection of personal projects with a focus on frontend, usability and interface structure.",
    hint: "Click to read more",
    intro:
      "A selection of personal projects that highlight how I work with structure, UX, responsive design and maintainable frontend implementation.",
    entries: [
      {
        id: "double-uu",
        title: "Double UU",
        imageSrc: "./double-uu.png",
        imageAlt: "Double UU website",
        description:
          "Built with Next.js and TypeScript, with a custom CMS-like admin layer for creating and managing content stored in MongoDB. The application uses server-rendered pages, structured data flows and authenticated admin functionality via NextAuth, enabling dynamic, database-driven content across the platform.",
        links: [
        { type: "github", url: "https://github.com/gitwilma/double-uu", label: "GitHub" },
        { type: "figma", url: "", label: "Figma" },
        { type: "live", url: "https://double-uu.vercel.app/", label: "Live site" }
        ]
        },
      {
        id: "bullet-journal",
        title: "Bullet Journal App",
        imageSrc: "./bullet-journal.png",
        imageAlt: "Bullet Journal app",
        description:
          "A mobile journaling app for daily notes and mood tracking, built with React Native and Expo. The project is under active development, with upcoming features including authentication, user-specific data and cloud-based storage. Designed as a long-term project to deepen my understanding of mobile architecture, state management and building scalable, user-centered applications.",
        links: [
        { type: "github", url: "https://github.com/gitwilma/bullet-journal", label: "GitHub" },
        { type: "figma", url: "https://www.figma.com/design/K4cbn1a8rQbfOGjiGBfRuj/bullet-journal?node-id=0-1&p=f&t=3n6zeCg1pIVRlNf8-0", label: "Figma" },
        ]
        },
      {
        id: "portfolio",
        title: "Portfolio",
        imageSrc: "./portfolio.png",
        imageAlt: "Portfolio website",
        description:
          "Built with React and TypeScript using a component-driven architecture with clear separation between layout, UI and feature logic. The application is structured around reusable components and a data-driven approach, with typed content models powering dynamic sections such as Selected Work and Expanded views. Styled using Emotion with a consistent design system for colors, spacing and typography.",
        links: [
        { type: "github", url: "https://github.com/gitwilma/wilma-portfolio", label: "GitHub" },
        { type: "figma", url: "https://www.figma.com/design/oRaysWgSlUXKs10R4sF9Kf/Portfolio-2026?node-id=1-3&t=3n6zeCg1pIVRlNf8-1", label: "Figma" },
        ]
        },
    ],
  },
];