import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

export default function Header() {
	const location = useLocation();

	return (
		<header className="border-b bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-14">
					<div className="flex items-center gap-2">
						<FileText className="w-5 h-5" />
						<h1 className="text-lg font-semibold">
							Markdown Editor
						</h1>
					</div>
					<nav className="flex gap-1">
						<Button
							className={
								location.pathname === "/error-test"
									? "bg-red-400 hover:bg-red-500 text-white"
									: "bg-red-200 hover:bg-red-300 text-red-900"
							}
							size="sm"
							asChild>
							<Link to="/error-test">Error Test</Link>
						</Button>
					</nav>
				</div>
			</div>
		</header>
	);
}
