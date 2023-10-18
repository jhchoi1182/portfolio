interface Props {
  title: string;
  li: string[];
  showElement: boolean;
  divRef: React.MutableRefObject<HTMLDivElement | null>;
}

function SkillLayout({ title, li, showElement, divRef }: Props) {
  return (
    <div
      ref={divRef}
      className={`flex fadeInUpAfter250ms ${showElement ? "show" : ""}`}
    >
      <div className="w-[290px] text-2xl font-semibold">{title}</div>
      <ul className="ml-10 text-xl list-disc space-y-4">
        {li.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillLayout;
