import Box from "../comp/Box";
import Banner from "../comp/Banner";
import CourseGroup from "../comp/CourseGroup";
import DATA from "../data/data";
import * as Icon from "react-bootstrap-icons";
import Footer from "../comp/Footer";

function HomePage() {
	return (
		<>
			<Banner />

			<section className="container-fluid pb-5">
				<div className="container mt-5 mb-5">
					<div className="text-center mb-5">
						<h1 className="mb-1">Why Choose Us?</h1>
						<small>
							You don't have to struggle alone, you've got our assistance and
							help.
						</small>
					</div>
					<div className="row gy-4">
						<div className="col col-sm-6 col-md-3">
							<Box icon={<Icon.PinMap size="40" />} title="Job Placement" />
						</div>
						<div className="col col-sm-6 col-md-3">
							<Box icon={<Icon.PlayBtn size="40" />} title="Over 100 videos" />
						</div>
						<div className="col col-sm-6 col-md-3">
							<Box
								icon={<Icon.PersonWorkspace size="40" />}
								title="Personal Coaching"
							/>
						</div>
						<div className="col col-sm-6 col-md-3">
							<Box
								icon={<Icon.Buildings size="40" />}
								title="Intern Placement"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="container-fluid mt-2 gray-bg pb-7">
				<div className="container">
					<div className="pt-5 ">
						<h1>Find the Right Course for you</h1>
					</div>
					<CourseGroup datasource={DATA.courses} />
				</div>
			</section>
			<Footer />
		</>
	);
}
export default HomePage;
