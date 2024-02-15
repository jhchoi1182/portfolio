import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import { REACTIVE_COLOR, TEXT_COLOR } from "../../../styles/colors";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://jhchoi1182.github.io/portfolio"
    : "";

function Contents() {
  const [markdown, setMarkdown] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`${baseURL}/data/${id}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [id]);

  return (
    <div className="w-full pt-[100px] font-notoSans lg:w-1/2 lg:pt-[15%]">
      <Markdown
        className={`prose dark:prose-invert max-w-none ${REACTIVE_COLOR.primaryText}`}
        components={{
          img: (image) => (
            <img
              className="object-cover rounded-2xl"
              src={image.src}
              alt={image.alt}
            />
          ),
          h3: ({ children }) => <h2 className="text-3xl">{children}</h2>,
          h4: ({ children }) => (
            <h4 className="text-xl sm:text-2xl">{children}</h4>
          ),
          h5: ({ children }) => (
            <li className="list-none text-2xl font-montserrat">{children}</li>
          ),
          h6: ({ children }) => (
            <h6 className={`text-xs ${REACTIVE_COLOR.subjectText} mt-32 mb-10`}>
              {children}
            </h6>
          ),
          a: ({ children, href }) => (
            <a className={TEXT_COLOR.link} href={href}>
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
          ),
          p: ({ children }) => (
            <p className="text-lg mb-10 sm:text-xl">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="text-lg list-disc sm:text-xl">{children}</ul>
          ),
          li: ({ children }) => <li>{children}</li>,
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
}

export default Contents;
