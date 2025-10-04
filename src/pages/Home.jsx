import { useState } from "react";
import Editor from "../components/Editor";
import Preview from "../components/Preview";

// Default markdown content
const defaultMarkdown = `# Welcome to Opon!

This is your **Opon**, your board for writing clear code, a space where ideas take shape and symbols find meaning.

Opon is an open-source Markdown editor inspired by the Yoruba word **Ọ̀pọ́n**, the sacred board used for interpretation and learning.

## Try it out:
- Write a few lines of Markdown
- Add a code block and watch it render live
- Save, upload, download and share your work

### Example Code Block:
\`\`\`javascript
function greeting() {
  console.log("Hello from Opon!");
}
\`\`\`

### Features:
- **Live Preview**: See your markdown rendered in real-time
- **Code Syntax Highlighting**: Beautiful code formatting
- **Persistent Storage**: Your work is automatically saved
- **Export Options**: Download and share your markdown files

> "Every idea begins on a clean surface (Opon)." - Traditional Wisdom

---

*Start writing your markdown on the left and see the rendered result on the right!*`;

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
				<Editor
					markdown={markdown}
					onMarkdownChange={handleMarkdownChange}
				/>
				<Preview markdown={markdown} />
			</div>
		</div>
	);
}

export default Home;
