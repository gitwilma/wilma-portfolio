export type WorkItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  hint?: string;
  introTitle: string;
  leftColumn: string[];
  middleColumn: string[];
  imageAlt: string;
};

export const workItems: WorkItem[] = [
  {
    id: "frontend",
    category: "Frontend Developer",
    title: "Stena Metall",
    description:
      "Worked on a Learning Hub feature from concept to production, with a focus on responsive views, clear structure and collaboration with UX and developers.",
    hint: "Click to read more",
    introTitle: "Selected work",
    leftColumn: [
      "Worked on a Learning Hub feature from concept to production, focusing on responsive interfaces, maintainable structure and close collaboration with UX and developers.",
      "Contributed to turning complex product and business requirements into interfaces that are easier to understand and use in practice.",
      "Focused on building solutions that are scalable, predictable and easier to maintain over time in a production environment.",
    ],
    middleColumn: [
      "Worked across implementation details such as component structure, responsive behaviour and frontend quality in collaboration with the wider team.",
      "Prioritised clarity, consistency and usability so that the final solution would support both user needs and long-term maintainability.",
    ],
    imageAlt: "Preview image for Stena Metall project",
  },
  {
    id: "content",
    category: "Content Creator",
    title: "Freelance",
    description:
      "Created visual and digital content for social media with a focus on clarity, communication and consistent brand tone across formats.",
    hint: "Click to read more",
    introTitle: "Selected work",
    leftColumn: [
      "Created visual and digital content for social media with a focus on clarity, consistency and communication.",
      "Worked with content adapted to different formats and channels while keeping the brand expression coherent.",
      "Balanced aesthetics with audience needs to make content more intuitive, engaging and easy to consume.",
    ],
    middleColumn: [
      "Focused on structure, messaging and presentation to create assets that worked in real use cases rather than only looking good visually.",
      "Worked iteratively with feedback and adjustments to improve clarity, tone and overall user response.",
    ],
    imageAlt: "Preview image for freelance content project",
  },
  {
    id: "projects",
    category: "Projects",
    title: "Selected work",
    description:
      "A collection of frontend and design-focused work that highlights usability, maintainability and thoughtful interface structure.",
    hint: "Click to read more",
    introTitle: "Selected work",
    leftColumn: [
      "A collection of frontend and design-focused work that highlights usability, maintainability and thoughtful interface structure.",
      "The projects reflect an interest in building interfaces that feel clear, intentional and easy to navigate.",
      "They also show a consistent focus on structure and long-term quality, not only visual polish.",
    ],
    middleColumn: [
      "Across the work, the goal has been to create digital experiences that are both functional and carefully considered from a UX perspective.",
      "This includes accessibility, responsiveness and component structures that are easier to extend and maintain.",
    ],
    imageAlt: "Preview image for selected personal projects",
  },
];