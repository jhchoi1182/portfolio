export interface ProjectCard {
  path: string;
  exp: string;
  date: string;
  title: string;
  img: string;
  techs: string[];
  image: string;
}

export interface ProjectMetaData {
  exp: string;
  title: string;
  projectType: "team" | "solo";
  contribution?: string;
  member?: { FE: number; BE: number; DE?: number };
  date: {
    start: string;
    end: string;
  };
  github: string[];
  service?: string[];
}
