import { REACTIVE_COLOR } from "../../../styles/colors";

interface Props {
  title: string;
  li: string[];
  showElement: boolean;
  divRef: React.MutableRefObject<HTMLDivElement | null>;
}

function SkillLayout({ title, li, showElement, divRef }: Props) {
  return (
    <>
      <div
        ref={divRef}
        className={`block w-[250px] animate-fadeInUpAfter250ms 2xl:w-[910px] lg:flex lg:w-[810px] md:w-[520px] sm:w-[400px] ${
          showElement ? "animate-show" : ""
        }`}
      >
        <div className="w-[290px] mb-5 text-xl font-semibold 2xl:text-2xl lg:mb-0">
          {title}
        </div>
        <ul className="text-sm list-disc space-y-4 2xl:text-xl 2xl:ml-10 md:text-lg">
          {li.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </div>
      <hr
        className={`block w-full h-[2px] -my-2 ${REACTIVE_COLOR.primaryLine} lg:hidden md:my-0`}
      />
    </>
  );
}

export default SkillLayout;
