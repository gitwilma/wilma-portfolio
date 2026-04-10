export type WorkCardType = "experience" | "content" | "projects";

export type SkillBadge = {
  id: string;
  label: string;
  iconSrc?: string;
};

export type ExperienceEntry = {
  id: string;
  company: string;
  companyLogoSrc?: string;
  summary: string;
  details: string[];
  skills: SkillBadge[];
};


export type ProjectEntry = {
  id: string;
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  description: string;
};

export type ContentEntry = {
  id: string;
  title: string;
  summary: string;
  images: {
    id: string;
    src?: string;
    alt?: string;
  }[];
  highlights: string[];
};

type BaseWorkItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  hint?: string;
};

export type ExperienceWorkItem = BaseWorkItem & {
  type: "experience";
  entries: ExperienceEntry[];
};

export type ProjectsWorkItem = BaseWorkItem & {
  type: "projects";
  intro: string;
  entries: ProjectEntry[];
};

export type ContentWorkItem = BaseWorkItem & {
  type: "content";
  entries: ContentEntry[];
};



export type WorkItem =
  | ExperienceWorkItem
  | ProjectsWorkItem
  | ContentWorkItem;