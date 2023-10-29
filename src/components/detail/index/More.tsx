import { useParams } from "react-router-dom";
import { projectCards } from "../../../assets/data/projectCard";
import ProjectCard from "../../project/elements/ProjectCard";

function More() {
  const { id } = useParams();
  const data = projectCards.filter((project) => project.path !== id);

  return (
    <div className="flex flex-col">
      <h1 className="text-5xl">Explore More</h1>
      <ul className="grid grid-cols-1 gap-[5%] gap-y-28 my-10 3xl:grid-cols-3 lg:grid-cols-2">
        {data.map((project, i) => (
          <ProjectCard
            key={i}
            isDetailPage
            size={`w-full h-[600px]`}
            data={project}
          />
        ))}
      </ul>
    </div>
  );
}

export default More;
