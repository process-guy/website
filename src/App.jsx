import Layout from "./Layout";
import HomePage from "./page/HomePage";
import CoursePage from "./page/CoursePage";
import ContactUsPage from "./page/ContactUsPage";
import SignUpPage from "./page/SignUpPage";
import NoPage from "./page/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="courses" element={<CoursePage />} />
					<Route path="contact" element={<ContactUsPage />} />
					<Route path="signup" element={<SignUpPage />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
