export interface Project {
  name: string;
  description: string;
  whatIDid: string[];
  techStack: string;
  images: string[];
  site: string;
  demo?: string;
  github: string;
}

export interface Experience {
  name: string;
  role: string;
  description: string;
  logo: string;
  techStack: string[];
  site: string;
  github: string;
}
