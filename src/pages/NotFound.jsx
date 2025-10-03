import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className="min-h-[60vh] flex items-center justify-center px-4">
			<Card className="max-w-md w-full text-center">
				<CardContent className="pt-6 space-y-4">
					<div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto">
						<span className="text-4xl">🤔</span>
					</div>
					<div>
						<h1 className="text-5xl font-bold mb-2">404</h1>
						<h2 className="text-xl font-semibold mb-2">
							Page Not Found
						</h2>
						<p className="text-sm text-muted-foreground mb-4">
							Sorry, we couldn't find the page you're looking for.
							The page might have been moved or deleted.
						</p>
					</div>
					<Button asChild>
						<Link to="/">
							<Home className="w-4 h-4 mr-2" />
							Back to Editor
						</Link>
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}

export default NotFound;
