import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { projectMetaDatas } from "../../../assets/data/projectMetaData";
import ProjectLink from "../elements/ProjectLink";

function MetaInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = projectMetaDatas[id ?? "portfolio"];
  const isTeamProject = data.projectType === "team";

  return (
    <div className="relative flex flex-col justify-between w-full pt-[200px] font-notoSans lg:sticky lg:top-0 lg:w-1/2 lg:h-screen lg:pt-[15%]">
      <button
        className="absolute top-32"
        onClick={() => navigate("/portfolio/project")}
      >
        <IoMdArrowRoundBack size="3rem" />
      </button>
      <div>
        <h5 className="text-xl mb-5">{`EXP 00${data.exp}`}</h5>
        <h1 className="text-6xl mb-5 pr-5 3xl:text-8xl xl:text-7xl">
          {data.title}
        </h1>
      </div>
      <div className="flex flex-col gap-8 pb-[32px]">
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
        <ProjectLink data={data} />
      </div>
    </div>
  );
}

export default MetaInfo;
