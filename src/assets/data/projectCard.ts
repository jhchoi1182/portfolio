import { projectNames } from "./projectName";
import consolog from "../images/project/consolog.webp";
import drawingBearIcon from "../images/project/drawingBearIcon.webp";
import gaebalLogIcon from "../images/project/gaebalLogIcon.webp";
import netflixIcon from "../images/project/netflixIcon.png";
import portfolioIcon from "../images/project/portfolioIcon.png";
import todoIcon from "../images/project/todoIcon.png";
import vlogIcon from "../images/project/vlogIcon.webp";

const projectData = [
  {
    path: "petProject",
    date: "2024.01",
    title: projectNames.petProject,
    img: todoIcon,
    techs: ["Next", "Spring Boot", "Docker"],
    imageForPreload:
      "https://github.com/jhchoi1182/next-todo/assets/116577489/c959ef3f-656d-4d22-b713-34fcf3006a44",
  },
  {
    path: "portfolio",
    date: "2023.11",
    title: projectNames.portfolio,
    img: portfolioIcon,
    techs: ["React", "TypeScript"],
    imageForPreload:
      "https://github.com/jhchoi1182/portfolio/assets/116577489/f03fec3a-cae2-4b0b-a53b-26af46239cf9",
  },
  {
    path: "gaebal-log",
    date: "2023.10",
    title: projectNames.gaebalLog,
    img: gaebalLogIcon,
    techs: ["Next", "Jest"],
    imageForPreload:
      "https://github.com/jhchoi1182/portfolio/assets/116577489/54d15845-3c8b-40e2-8b16-3ad34ebd2880",
  },
  {
    path: "vlog",
    date: "2023.06",
    title: projectNames.vlog,
    img: vlogIcon,
    techs: ["Next"],
    imageForPreload:
      "https://github.com/jhchoi1182/portfolio/assets/116577489/70ed7fdb-ea95-42d1-ab02-091e3a961e05",
  },
  {
    path: "jjabflix",
    date: "2023.05",
    title: projectNames.jjabflix,
    img: netflixIcon,
    techs: ["React", "TypeScript"],
    imageForPreload:
      "https://github.com/jhchoi1182/portfolio/assets/116577489/ad7a30cb-5c01-4930-a004-5c0efec1ddd8",
  },
  {
    path: "drawingbear",
    date: "2023.02",
    title: projectNames.drawingBear,
    img: drawingBearIcon,
    techs: ["React", "React-Query"],
    imageForPreload:
      "https://github.com/jhchoi1182/portfolio/assets/116577489/db1dd0c5-73b5-4192-918d-74bad07041fd",
  },
  {
    path: "consolog",
    date: "2022.12",
    title: projectNames.consolog,
    img: consolog,
    techs: ["React", "Redux"],
    imageForPreload:
      "https://github.com/jhchoi1182/portfolio/assets/116577489/69fe1384-27fd-4828-97e5-2afb5cbe4e24",
  },
];

export const projectCards = projectData.map((project, index) => ({
  ...project,
  exp: index + 1,
}));
