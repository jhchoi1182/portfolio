import { center } from "../../../../styles/classNames";

interface props {
  title: string;
  img: React.ReactNode;
  descriptions: React.ReactNode;
}

function ExperienceLayout({ title, img, descriptions }: props) {
  return (
    <div className={`${center} flex-col w-screen h-full`}>
      <div className="flex justify-center w-3/4 h-2/3 pt-[80px]">
        <div className={`${center} hidden w-[55%] h-full 2xl:flex`}>{img}</div>
        <div className="flex flex-col w-[100%] h-full text-center 2xl:w-[45%] 2xl:text-start 2xl:pl-20">
          <h1 className="text-xl font-bold mb-6 lg:text-3xl lg:mb-10 md:text-2xl md:mb-8">
            {title}
          </h1>
          <ul className="text-lg space-y-4 lg:text-2xl lg:space-y-8 md:text-xl md:space-y-6">
            {descriptions}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExperienceLayout;
