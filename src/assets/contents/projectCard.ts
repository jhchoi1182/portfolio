import consolog from "../images/project/consolog.webp";
import drawingBearIcon from "../images/project/drawingBearIcon.webp";
import gaebalLogIcon from "../images/project/gaebalLogIcon.webp";
import netflixIcon from "../images/project/netflixIcon.png";
import portfolioIcon from "../images/project/portfolioIcon.png";
import vlogIcon from "../images/project/vlogIcon.webp";

export const projectCards = [
  {
    path: "portfolio",
    exp: "1",
    date: "진행 중",
    title: "Jihyeon's Portfolio",
    img: portfolioIcon,
    techs: ["React"],
  },
  {
    path: "gaebal-log",
    exp: "2",
    date: "진행 중",
    title: "개발로그",
    img: gaebalLogIcon,
    techs: ["Next", "Jest"],
  },
  {
    path: "vlog-and-todo",
    exp: "3",
    date: "2023.06",
    title: "개인 기술 블로그 & Next Todo List",
    img: vlogIcon,
    techs: ["Next", "Mongo DB"],
  },
  {
    path: "jjabflix",
    exp: "4",
    date: "2023.05",
    title: "Jjabflix",
    img: netflixIcon,
    techs: ["React", "TypeScript"],
  },
  {
    path: "drawingbear",
    exp: "5",
    date: "2023.02",
    title: "쓰곰그리곰",
    img: drawingBearIcon,
    techs: ["React", "React-Query"],
  },
  {
    path: "consolog",
    exp: "6",
    date: "2022.12",
    title: "Consolog",
    img: consolog,
    techs: ["React", "React-Query"],
  },
];
