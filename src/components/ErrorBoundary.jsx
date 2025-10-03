import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		console.error("Error caught by boundary:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="min-h-screen flex items-center justify-center px-4 bg-background">
					<Card className="max-w-md w-full text-center">
						<CardContent className="pt-6 space-y-4">
							<div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
								<AlertTriangle className="w-8 h-8 text-destructive" />
							</div>
							<div>
								<h2 className="text-xl font-bold mb-2">
									Something went wrong
								</h2>
								<p className="text-sm text-muted-foreground mb-4">
									We're sorry, but something unexpected
									happened. Please try refreshing the page.
								</p>
							</div>
							<div className="flex gap-2 justify-center">
								<Button
									onClick={() => window.location.reload()}>
									Refresh Page
								</Button>
								<Button variant="outline" asChild>
									<Link to="/">Go Home</Link>
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
