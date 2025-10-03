import { useState } from "react";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import useLocalStorage from "../hooks/useLocalStorage";
import { defaultMarkdown } from "../utils/markdownParser";

function Home() {
  const [markdown, setMarkdown] = useState(() => {
    const saved = localStorage.getItem("markdown-content");
    return saved || defaultMarkdown;
  });

  const handleMarkdownChange = (value) => {
    setMarkdown(value);
    localStorage.setItem("markdown-content", value);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-[calc(100vh-3.5rem)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
        <Editor markdown={markdown} onMarkdownChange={handleMarkdownChange} />
        <Preview markdown={markdown} />
      </div>
    </div>
  );
}

export default Home;
