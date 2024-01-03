import { ParticlesConfig } from "./interface/particlesJS";
import { ExperienceText } from "./model/experienceText";
import { ProjectCard, ProjectMetaData } from "./model/project";

declare global {
  interface experienceText extends ExperienceText {}
  interface projectCard extends ProjectCard {}
  interface projectMetaData extends ProjectMetaData {}
  interface Window {
    particlesJS: {
      (tagId: string, params: ParticlesConfig): void;
    };
  }
}
