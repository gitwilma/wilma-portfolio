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
        companyLogoSrc: "",
        summary:
          "Worked on frontend development in a production environment with a focus on clarity, maintainability and collaboration.",
        details: [
          "Worked on a Learning Hub feature from concept to production.",
          "Focused on responsive interfaces, reusable structure and clear UX implementation.",
          "Collaborated closely with UX and developers to translate requirements into practical solutions.",
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
        imageSrc: "",
        imageAlt: "",
        description:
          "A digital fashion magazine built with a focus on editorial design, clear structure and thoughtful user experience.",
      },
      {
        id: "bullet-journal",
        title: "Bullet Journal App",
        imageSrc: "",
        imageAlt: "",
        description:
          "A React Native app focused on structure, simplicity and calm interaction patterns for journaling and planning.",
      },
      {
        id: "portfolio",
        title: "Portfolio",
        imageSrc: "",
        imageAlt: "",
        description:
          "A personal portfolio focused on clean layout, typography, accessibility and maintainable component structure.",
      },
    ],
  },

   {
    id: "content",
    type: "content",
    category: "Content & Branding",
    title: "Selected work",
    description:
      "Examples of social media content, brand-focused material and visual communication work across different formats.",
    hint: "Click to read more",
    entries: [
      {
        id: "campaign-1",
        title: "Social media campaign",
        summary:
          "Created content with a focus on visual clarity, brand consistency and communication adapted to channel and audience.",
        images: [
          { id: "img-1", src: "", alt: "" },
          { id: "img-2", src: "", alt: "" },
          { id: "img-3", src: "", alt: "" },
        ],
        highlights: [
          "Created content adapted for different formats and placements.",
          "Worked with tone, structure and messaging.",
          "Balanced visual expression with clarity and usability.",
          "Produced assets iteratively based on feedback and performance needs.",
        ],
      },
      {
        id: "campaign-2",
        title: "Branding material",
        summary:
          "Worked with communication and design-focused material for digital channels and brand visibility.",
        images: [
          { id: "img-4", src: "", alt: "" },
          { id: "img-5", src: "", alt: "" },
          { id: "img-6", src: "", alt: "" },
        ],
        highlights: [
          "Developed visual material for consistent brand expression.",
          "Adapted layouts and content for different use cases.",
          "Focused on readability, hierarchy and communication.",
          "Improved overall clarity and cohesiveness of assets.",
        ],
      },
    ],
  },
];