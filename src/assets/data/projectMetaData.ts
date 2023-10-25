type projectMetaDatasType = {
  [key: string]: projectMetaData;
};

export const projectMetaDatas: projectMetaDatasType = {
  portfolio: {
    exp: "1",
    title: "Jihyeon's Portfolio",
    projectType: "solo",
    date: {
      start: "23. 10",
      end: "진행중",
    },
    github: ["https://github.com/GaebalLog/GaebalLog_front"],
    service: ["https://gaebal-log.vercel.app/home"],
  },
  "gaebal-log": {
    exp: "2",
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
      end: "진행중",
    },
    github: ["https://github.com/GaebalLog/GaebalLog_front"],
    service: ["https://gaebal-log.vercel.app/home"],
  },
  "vlog-and-todo": {
    exp: "3",
    title: "개인 기술 블로그 & Next Todo List",
    projectType: "solo",
    date: {
      start: "23. 06",
      end: "23. 06",
    },
    github: [
      "https://github.com/jhchoi1182/jihyeon_blog",
      "https://github.com/jhchoi1182/next-todo",
    ],
    service: [
      "https://www.jihyeon-blog.shop/",
      "https://next-todo-mu.vercel.app/",
    ],
  },
  jjabflix: {
    exp: "4",
    title: "넷플릭스 클론 프로젝트",
    projectType: "solo",
    date: {
      start: "23. 04",
      end: "23. 05",
    },
    github: ["https://github.com/jhchoi1182/jjabflix"],
    service: ["https://jjabflix.vercel.app/"],
  },
  drawingbear: {
    exp: "5",
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
  consolog: {
    exp: "6",
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
};
