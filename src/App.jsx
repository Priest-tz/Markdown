import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Home from "./pages/Home";
import ErrorTest from "./pages/ErrorTest";
import NotFound from "./pages/NotFound";

export default function App() {
	return (
		<ErrorBoundary>
			<div className="min-h-screen bg-background">
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/error-test" element={<ErrorTest />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
			</div>
		</ErrorBoundary>
	);
}
