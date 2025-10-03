export const defaultMarkdown = `# Welcome to Markdown Editor

## Features
- **Live Preview**: See your markdown rendered in real-time
- **File Upload**: Import existing .md files
- **Download**: Export your work as markdown

### Try it out
Start typing in the editor to see the preview update automatically!

\`\`\`javascript
console.log("Hello, Markdown!");
\`\`\`

> This is a quote block

- List item 1
- List item 2
- List item 3`;

// Simple markdown parser
export function parseMarkdown(markdown) {
	let html = markdown;

	// Headers
	html = html.replace(
		/^### (.*$)/gim,
		'<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>'
	);
	html = html.replace(
		/^## (.*$)/gim,
		'<h2 class="text-xl font-semibold mt-6 mb-3">$1</h2>'
	);
	html = html.replace(
		/^# (.*$)/gim,
		'<h1 class="text-2xl font-bold mt-8 mb-4">$1</h1>'
	);

	// Bold and italic
	html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
	html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
	html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

	// Code blocks
	html = html.replace(
		/```(\w+)?\n([\s\S]*?)```/g,
		'<pre class="bg-gray-100 p-3 rounded my-3 overflow-x-auto"><code>$2</code></pre>'
	);
	html = html.replace(
		/`(.+?)`/g,
		'<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>'
	);

	// Blockquotes
	html = html.replace(
		/^> (.+)/gim,
		'<blockquote class="border-l-4 border-gray-300 pl-4 my-3 italic text-gray-700">$1</blockquote>'
	);

	// Lists
	html = html.replace(/^\- (.+)/gim, '<li class="ml-6 list-disc">$1</li>');
	html = html.replace(/(<li.*<\/li>)/s, '<ul class="my-2">$1</ul>');

	// Line breaks
	html = html.replace(/\n/g, "<br>");

	return html;
}
