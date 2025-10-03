import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { marked } from "marked"; 

function Preview({ markdown }) {
	return (
		<Card className="h-full flex flex-col">
			<CardHeader className="pb-3">
				<CardTitle className="text-lg">Preview</CardTitle>
			</CardHeader>
			<CardContent className="flex-1 overflow-y-auto">
				<div
					className="prose prose-sm max-w-none"
					dangerouslySetInnerHTML={{
						__html: marked.parse(markdown),
					}}
				/>
			</CardContent>
		</Card>
	);
}
export default Preview;
