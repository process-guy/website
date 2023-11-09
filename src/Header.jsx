import { Outlet, Link } from "react-router-dom";

function Header() {
	return (
		<>
			<section class="top-part1 container-fluid">
				<div class="container pt-3">
					<nav class="navbar navbar-expand-lg ">
						<a class="navbar-brand" href="#">
							<img src="/logo-wt.svg" width="200px" />
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div
							class=" d-flex  justify-content-end collapse navbar-collapse"
							id="navbarNav">
							<ul class="navbar-nav">
								<li class="nav-item active">
									<Link to="/" className="nav-link">
										Home
									</Link>
								</li>
								<li class="nav-item">
									<Link to="/courses" className="nav-link">
										Courses
									</Link>
								</li>
								<li class="nav-item">
									<Link to="/contact" className="nav-link">
										Contact Us
									</Link>
								</li>
								<li class="nav-item special-link">
									<Link to="/signup" className="nav-link">
										Sign Up
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</section>

			<Outlet />
		</>
	);
}

export default Header;
