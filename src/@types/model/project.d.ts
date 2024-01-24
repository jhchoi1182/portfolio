export interface ProjectCard {
  path: string;
  exp: number;
  date: string;
  title: string;
  img: string;
  techs: string[];
  imageForPreload: string;
}

export interface ProjectMetaData {
  key: string;
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
