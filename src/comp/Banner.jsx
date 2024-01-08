import * as I from "react-bootstrap-icons";

export default function Banner() {
	return (
		<>
			<section className="top-part2 ">
				<div className="container">
					<div className="pt-4 mt-3">
						<div className="row">
							<div className="col-sm-7">
								<div className="display-5 mt-5 pt-1 fw-600">
									Let me be your
									<br />
									Personal Coach 😉
								</div>
								<div>Unlimited access to all our training materials</div>

								<div className="row">
									<div className="col-8">
										<div className="d-flex">
											<input
												placeholder="What do you want to Learn?"
												className="form-control p-3 mt-4 mb-2"
											/>
											<button className="btn b-search">
												<I.Search className="fs-5" />
											</button>
										</div>
									</div>
									<div className="col-4"></div>
								</div>
								<div>
									You're guaranteed to find something that`s right for you.
								</div>
							</div>
							<div className="col-sm-5 position-relative">
								<img src="/hero.png" className="img-fluid" />
								<div className="banner-card position-absolute ">
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
								<div className="banner-card2 position-absolute ">
									<I.BookmarkHeartFill
										color="white"
										size="50"
										className="bg-danger rounded-1 p-2"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
