interface Props {
  title: string;
  li: string[];
}

function SkillLayout({ title, li }: Props) {
  return (
    <div className="flex">
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
