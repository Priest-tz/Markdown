import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Download } from "lucide-react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";

function Editor({ markdown: markdownContent, onMarkdownChange }) {
	const [fileInputKey, setFileInputKey] = useState(0);
	const fileInputRef = useRef(null);

	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		if (
			file &&
			(file.type === "text/markdown" || file.name.endsWith(".md"))
		) {
			const reader = new FileReader();
			reader.onload = (e) => {
				onMarkdownChange(e.target.result);
			};
			reader.readAsText(file);
		} else {
			alert("Please select a valid Markdown file (.md)");
		}
		setFileInputKey((prev) => prev + 1);
	};

	const handleDownload = () => {
		const blob = new Blob([markdownContent], { type: "text/markdown" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "document.md";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};

	const handleUploadClick = () => {
		document.getElementById("file-upload").click();
	};

	const handleEditorChange = (value) => {
		onMarkdownChange(value);
	};

	return (
		<Card className="h-full flex flex-col">
			<CardHeader className="pb-3">
				<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
					<CardTitle className="text-lg" id="editor-title">
						Editor
					</CardTitle>
					<div className="flex flex-col sm:flex-row gap-2">
						<Button
							className="bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm whitespace-nowrap"
							size="sm"
							onClick={handleUploadClick}
							aria-describedby="upload-instructions">
							<Upload
								className="w-4 h-4 mr-1"
								aria-hidden="true"
							/>
							Upload Markdown File
						</Button>
						<Button
							className="bg-cyan-600 hover:bg-cyan-700 text-white text-xs sm:text-sm whitespace-nowrap"
							size="sm"
							onClick={handleDownload}>
							<Download
								className="w-4 h-4 mr-1"
								aria-hidden="true"
							/>
							Download Markdown
						</Button>
					</div>
				</div>
				<div id="upload-instructions" className="sr-only">
					Opens file dialog to upload a markdown file
				</div>
			</CardHeader>
			<CardContent className="flex-1 flex flex-col p-0">
				<input
					key={fileInputKey}
					type="file"
					id="file-upload"
					onChange={handleFileUpload}
					accept=".md,text/markdown"
					className="hidden"
					aria-label="Upload markdown file"
					ref={fileInputRef}
				/>
				<div className="flex-1 overflow-hidden rounded-b-lg">
					<CodeMirror
						value={markdownContent}
						onChange={handleEditorChange}
						extensions={[markdown()]}
						theme="light"
						basicSetup={{
							lineNumbers: true,
							highlightActiveLine: true,
							highlightSelectionMatches: true,
							indentOnInput: true,
							bracketMatching: true,
							closeBrackets: true,
							lineWrapping: true,
						}}
						className="h-full text-sm font-mono [&_.cm-editor]:h-full [&_.cm-scroller]:overflow-auto [&_.cm-content]:break-words [&_.cm-line]:break-words"
						placeholder="Start writing your markdown here..."
						aria-labelledby="editor-title"
						aria-describedby="editor-description"
					/>
				</div>
				<div id="editor-description" className="sr-only">
					Markdown text editor with live syntax highlighting. Type
					your markdown content here. Supports markdown syntax for
					formatting with real-time visual feedback.
				</div>
			</CardContent>
		</Card>
	);
}

export default Editor;
