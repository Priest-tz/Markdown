import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { marked } from "marked";
import DOMPurify from "dompurify";

// Configure marked options if needed
marked.setOptions({
	breaks: true,
	gfm: true,
});

function Preview({ markdown }) {
	const html = marked.parse(markdown);
	const sanitizedHtml = DOMPurify.sanitize(html);

	return (
		<Card className="h-full flex flex-col">
			<CardHeader className="pb-3">
				<CardTitle className="text-lg">Preview</CardTitle>
			</CardHeader>
			<CardContent className="flex-1 overflow-y-auto">
				<div
					className="prose prose-sm max-w-none"
					dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
				/>
			</CardContent>
		</Card>
	);
}
export default Preview;
