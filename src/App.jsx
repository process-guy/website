import Header from "./Header";
import HomePage from "./HomePage";
import CoursePage from "./CoursePage";
import ContactUsPage from "./ContactUsPage";
import SignUpPage from "./SignUpPage";
import NoPage from "./NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index element={<HomePage />} />
					<Route path="courses" element={<CoursePage />} />
					<Route path="contact" element={<ContactUsPage />} />
					<Route path="signup" element={<SignUpPage />} />
					<Route path="*" element={<NoPage />} />
				</Route>
				{/* <Header />
				<Body /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
