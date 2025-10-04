import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Download } from "lucide-react";

function Editor({ markdown, onMarkdownChange }) {
	const [fileInputKey, setFileInputKey] = useState(0);

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
		const blob = new Blob([markdown], { type: "text/markdown" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "document.md";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};

	return (
		<Card className="h-full flex flex-col">
			<CardHeader className="pb-3">
				<div className="flex justify-between items-center">
					<CardTitle className="text-lg">Editor</CardTitle>
					<div className="flex gap-2">
						<Button
							className="bg-green-600 hover:bg-green-700 text-white"
							size="sm"
							onClick={() =>
								document.getElementById("file-upload").click()
							}>
							<Upload className="w-4 h-4 mr-1" />
							Upload
						</Button>
						<Button
							className="bg-cyan-600 hover:bg-cyan-700 text-white"
							size="sm"
							onClick={handleDownload}>
							<Download className="w-4 h-4 mr-1" />
							Download
						</Button>
					</div>
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
				/>
				<Textarea
					value={markdown}
					onChange={(e) => onMarkdownChange(e.target.value)}
					className="flex-1 resize-none border-0 rounded-none font-mono text-sm focus-visible:ring-0"
					placeholder="Start writing your markdown here..."
				/>
			</CardContent>
		</Card>
	);
}

export default Editor;
