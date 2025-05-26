export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubLink: string;
  demoLink?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  description: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number | string;
  description: string;
}