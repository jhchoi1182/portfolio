import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { useParams } from "react-router-dom";
import { projectMetaDatas } from "../../../assets/data/projectMetaData";
import { center } from "../../../styles/classNames";

function MetaInfo() {
  const [isHovered, setIsHovered] = useState(false);
  const { id } = useParams();
  const data = projectMetaDatas[id ?? "portfolio"];
  const isTeamProject = data.projectType === "team";
  const isTwoProject = data.title.split("&").length !== 1;

  return (
    <div className="sticky top-0 flex flex-col justify-between w-1/2 h-screen pt-[15%] font-notoSans">
      <div>
        <h5 className="text-xl mb-5">{`EXP 00${data.exp}`}</h5>
        <h1 className=" text-8xl">{data.title}</h1>
      </div>
      <div className="flex flex-col gap-8 pb-[5%]">
        <div className="flex gap-3">
          <h3 className="text-3xl font-semibold">
            {isTeamProject ? "팀 프로젝트" : "개인 프로젝트"}
          </h3>
          {data.member && (
            <span className="self-end mb-[3px]">
              {`(${Object.entries(data.member)
                .map(([key, value]) => `${key}${value}`)
                .join(" / ")})`}
            </span>
          )}
        </div>
        {isTeamProject && <h5>{`Contribution ${data.contribution}`}</h5>}
        <span className="text-[#636e72] dark:text-[#b2bec3]">{`'${
          data.date.start
        } - ${data.date.end !== "진행중" ? "'" : ""}${data.date.end}`}</span>
        <div className="flex gap-10">
          {data.title.split("&").map((title, i) => (
            <div
              key={i}
              className={`flex flex-col gap-6 ${
                isTwoProject ? "items-center" : ""
              }`}
            >
              {isTwoProject && <h5>{title}</h5>}
              <a
                className="text-4xl cursor-pointer"
                href={data.github[i]}
                rel="noreferrer"
                target="_blank"
              >
                <button
                  className={`${center} w-14 h-14 border border-black rounded-full`}
                >
                  <AiFillGithub className="w-6 h-6" />
                </button>
              </a>
              <a href={data.github[0]} rel="noreferrer" target="_blank">
                <button
                  className={`${center} gap-5 w-32 h-11 bg-inverse dark:bg-primary rounded-full`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {isHovered ? (
                    <GoArrowUpRight className="w-5 h-5 -ml-1 -mr-1 text-white dark:text-black" />
                  ) : (
                    <div className="w-3 h-3 bg-white dark:bg-black rounded-full" />
                  )}
                  <span className="text-xl font-semibold text-white dark:text-dark">
                    View
                  </span>
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MetaInfo;
