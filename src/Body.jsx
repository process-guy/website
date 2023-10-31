import Box from "./comp/Box";
import CourseGroup from "./comp/CourseGroup";
import DATA from "./data/data";

function Body() {
	return (
		<>
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
							<Box icon="Job" title="Job Placement" />
						</div>
						<div class="col col-sm-6 col-md-3">
							<Box icon="Online" title="Over 100 videos" />
						</div>
						<div class="col col-sm-6 col-md-3">
							<Box icon="icon" title="Personal Coaching" />
						</div>
						<div class="col col-sm-6 col-md-3">
							<Box icon="icon" title="Intern Parent Company" />
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
export default Body;
