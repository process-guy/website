import Box from "./comp/Box";
import CourseGroup from "./comp/CourseGroup";
import DATA from "./data/data";
import * as Icon from "react-bootstrap-icons";
import * as I from "react-bootstrap-icons";

function HomePage() {
	return (
		<>
			<section class="top-part2 ">
				<div className="container">
					<div class="pt-4 mt-3">
						<div class="row">
							<div class="col-sm-7">
								<div class="display-5 mt-5 pt-5">
									Let me be your
									<br />
									<strong>Personal Coach 😉 </strong>
								</div>
								<div>Unlimited access to all our training materials</div>
							</div>
							<div class="col-sm-5 position-relative">
								<img src="/hero.png" class="img-fluid" />
								<div class="banner-card position-absolute ">
									<div className="row">
										<div className="col-2">
											<I.AwardFill
												color="white"
												size="40"
												className="bg-success rounded-5 p-2"
											/>
										</div>
										<div className="col-10 ps-3">
											<h6>Congratulations</h6>
											<span>Your admission completed</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="container-fluid pb-5">
				<div class="container mt-5 mb-5">
					<div class="text-center mb-5">
						<h1 class="mb-1">Why Choose Us?</h1>
						<small>
							You don't have to struggle alone, you've got our assistance and
							help.
						</small>
					</div>
					<div class="row gy-4">
						<div class="col col-sm-6 col-md-3">
							<Box icon={<Icon.PinMap size="40" />} title="Job Placement" />
						</div>
						<div class="col col-sm-6 col-md-3">
							<Box icon={<Icon.PlayBtn size="40" />} title="Over 100 videos" />
						</div>
						<div class="col col-sm-6 col-md-3">
							<Box
								icon={<Icon.PersonWorkspace size="40" />}
								title="Personal Coaching"
							/>
						</div>
						<div class="col col-sm-6 col-md-3">
							<Box
								icon={<Icon.Buildings size="40" />}
								title="Intern Placement"
							/>
						</div>
					</div>
				</div>
			</section>
			<section class="container-fluid mt-2 gray-bg pb-7">
				<div class="container">
					<div class="pt-5 pb-4">
						<h1>Find the Right Course for you</h1>
						<small>
							You don't have to struggle alone, you've got our assistance and
							help.
						</small>
					</div>
					<CourseGroup datasource={DATA.courses} />
				</div>
			</section>
			<div class="mb-1000"></div>
		</>
	);
}
export default HomePage;
