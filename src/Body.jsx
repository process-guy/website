import Box from "./comp/Box";

function Body() {
	return (
		<>
			<section class="container-fluid ">
				<div class="container-lg mt-5 mb-5">
					<h1 class="text-center">Why Choose Us?</h1>
				</div>
				<div class="row gy-4">
					<div class="col col-sm-6">
						<Box img="Job" title="Job Placement Support" />
					</div>
					<div class="col col-sm-6">
						<Box img="Online" title="Over 100 videos" />
					</div>
					<div class="col col-sm-6">
						<Box title="Personal Coaching" />
					</div>
					<div class="col col-sm-6">
						<Box title="Intership" />
					</div>
				</div>
			</section>
			<section class="container-fluid mt-5 gray-bg">
				<div class="container-lg">
					<h1 class="text-center pt-5 pb-4">Find the Right Course for you</h1>
				</div>
			</section>
		</>
	);
}
export default Body;
