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
  }, [id]);

  return (
    <div className="w-1/2 pt-[15%] font-notoSans">
      <Markdown
        className="prose dark:prose-invert max-w-none text-black dark:text-white"
        components={{
          img: (image) => (
            <img
              className="object-cover rounded-2xl"
              src={image.src}
              alt={image.alt}
            />
          ),
          h3: ({ children }) => <h2 className="text-3xl">{children}</h2>,
          h4: ({ children }) => <h4 className="text-2xl">{children}</h4>,
          h5: ({ children }) => (
            <li className="list-none text-2xl font-montserrat">{children}</li>
          ),
          h6: ({ children }) => (
            <h6 className="text-xs text-[#636e72] dark:text-[#b2bec3] mt-32 mb-10">
              {children}
            </h6>
          ),
          a: ({ children, href }) => (
            <a className="text-[#3498db]" href={href}>
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
          ),
          p: ({ children }) => <p className="text-xl mb-10">{children}</p>,
          ul: ({ children }) => (
            <ul className="text-xl list-disc">{children}</ul>
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
