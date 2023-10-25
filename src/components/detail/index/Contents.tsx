import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";

function Contents() {
  const [markdown, setMarkdown] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`/data/${id}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="w-1/2 pt-[15%]">
      <Markdown
        className="prose dark:prose-invert max-w-none"
        components={{
          img: (image) => (
            <img
              className="object-cover rounded-2xl"
              src={image.src}
              alt={image.alt}
            />
          ),
          h2: ({ children }) => <h2 className="">{children}</h2>,
          a: ({ children, href }) => (
            <a className="text-river" href={href}>
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
          ),
          p: ({ children }) => <p className="">{children}</p>,
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
}

export default Contents;
