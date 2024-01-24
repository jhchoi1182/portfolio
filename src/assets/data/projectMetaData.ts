interface ExtendedProjectMetaData extends projectMetaData {
  exp: number;
}
type projectMetaDatasType = {
  [key: string]: ExtendedProjectMetaData;
};

const projects: projectMetaData[] = [
  {
    key: "todo",
    title: "Todo 게시판 & Todo 게시판 서버",
    projectType: "solo",
    date: {
      start: "24. 01",
      end: "24. 01",
    },
    github: [
      "https://github.com/jhchoi1182/next-todo",
      "https://github.com/jhchoi1182/todo-server",
    ],
    service: ["https://next-todo-mu.vercel.app/todo"],
  },
  {
    key: "portfolio",
    title: "Jihyeon's Portfolio",
    projectType: "solo",
    date: {
      start: "23. 10",
      end: "23. 11",
    },
    github: ["https://github.com/jhchoi1182/portfolio"],
    service: ["https://jhchoi1182.github.io/portfolio"],
  },
  {
    key: "gaebal-log",
    title: "개발로그",
    projectType: "team",
    contribution: "63%",
    member: {
      FE: 2,
      BE: 2,
      DE: 1,
    },
    date: {
      start: "23. 07",
      end: "23. 10",
    },
    github: ["https://github.com/GaebalLog/GaebalLog_front"],
  },
  {
    key: "vlog",
    title: "Jihyeon's 블로그",
    projectType: "solo",
    date: {
      start: "23. 06",
      end: "23. 06",
    },
    github: ["https://github.com/jhchoi1182/jihyeon_blog"],
    service: ["https://www.jihyeon-blog.shop/"],
  },
  {
    key: "jjabflix",
    title: "Jjabflix",
    projectType: "solo",
    date: {
      start: "23. 04",
      end: "23. 05",
    },
    github: ["https://github.com/jhchoi1182/jjabflix"],
    service: ["https://jjabflix.vercel.app/"],
  },
  {
    key: "drawingbear",
    title: "쓰곰그리곰",
    projectType: "team",
    contribution: "55%",
    member: {
      FE: 3,
      BE: 2,
      DE: 1,
    },
    date: {
      start: "23. 01",
      end: "23. 02",
    },
    github: ["https://github.com/jhchoi1182/DrawingBear"],
    service: ["https://www.youtube.com/watch?v=6lDclos5mA8&feature=youtu.be"],
  },
  {
    key: "consolog",
    title: "Consolog",
    projectType: "team",
    contribution: "40%",
    member: {
      FE: 3,
      BE: 3,
    },
    date: {
      start: "22. 12",
      end: "22. 12",
    },
    github: ["https://github.com/saehwa95/clone-velog"],
    service: ["https://www.youtube.com/watch?v=aPGRNPumqjs"],
  },
];

export const projectMetaDatas = projects.reduce<projectMetaDatasType>(
  (acc, project, index) => {
    acc[project.key] = {
      ...project,
      exp: index + 1,
    };
    return acc;
  },
  {},
);
