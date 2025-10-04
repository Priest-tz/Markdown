import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react"; 

// Configure marked options
marked.setOptions({
	breaks: true,
	gfm: true,
});

function Preview({ markdown }) {
	const [html, setHtml] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (markdown.trim() === "") {
			setHtml("");
			return;
		}

		setIsLoading(true);

		// Use setTimeout to simulate loading state for large markdown content
		const timer = setTimeout(() => {
			try {
				const parsedHtml = marked.parse(markdown);
				const sanitizedHtml = DOMPurify.sanitize(parsedHtml);
				setHtml(sanitizedHtml);
			} catch (error) {
				console.error("Error parsing markdown:", error);
				setHtml("<p>Error parsing markdown</p>");
			} finally {
				setIsLoading(false);
			}
		}, 1000); // Small delay to show loader only for slower parsing

		return () => clearTimeout(timer);
	}, [markdown]);

	return (
		<Card className="h-full flex flex-col">
			<CardHeader className="pb-3">
				<CardTitle className="text-lg">Preview</CardTitle>
			</CardHeader>
			<CardContent className="flex-1 overflow-y-auto relative">
				{isLoading ? (
					<div className="absolute inset-0 flex items-center justify-center bg-background/50">
						<div className="flex flex-col items-center gap-2">
							<Loader2 className="h-8 w-8 animate-spin text-primary" />
							<p className="text-sm text-muted-foreground">
								Rendering...
							</p>
						</div>
					</div>
				) : null}
				<div
					className={`prose prose-sm max-w-none ${
						isLoading ? "opacity-50" : ""
					}`}
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</CardContent>
		</Card>
	);
}

export default Preview;
