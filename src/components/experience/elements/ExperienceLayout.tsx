import { center } from "../../../styles/classNames";

interface props {
  title: string;
  img: React.ReactNode;
  descriptions: React.ReactNode;
}

function ExperienceLayout({ title, img, descriptions }: props) {
  return (
    <div className={`${center} flex-col w-screen h-full`}>
      <div className="flex w-3/4 h-2/3 pt-[4%]">
        <div className={`${center} w-2/3 h-full`}>{img}</div>
        <div className="flex flex-col w-1/3 h-full">
          <h1 className="text-3xl font-bold mb-10">{title}</h1>
          <ul className="text-2xl space-y-8">{descriptions}</ul>
        </div>
      </div>
    </div>
  );
}

export default ExperienceLayout;
