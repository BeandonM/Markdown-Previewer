import { useState, useEffect } from "react";
import { marked } from "marked";

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState<string>(
    `# Welcome to Markdown Previewer\n\nType Markdown on the left to see the preview on the right!`
  );

  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    const convertMarkdown = async () => {
      const renderedHtml = await marked(markdown);
      setHtml(renderedHtml);
    };

    convertMarkdown();
  }, [markdown]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="markdown-previewer">
      <textarea
        className="editor"
        value={markdown}
        onChange={handleInputChange}
        placeholder="Enter Markdown here..."
      />
      <div className="preview" dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};

export default MarkdownPreviewer;
