import * as I from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<>
			<section className="gray-bg2">
				<div className="container call-to-action">
					<div className="card card-body shadow-lg p-0 ">
						<div className="row ">
							<div className="col-6 text-center bg-warning p-5 custom-br ">
								<h1 className="h1">Start Learning Today !!!</h1>
							</div>
							<div className="col-6 text-center p-5">
								<a href="" className="me-1 btn btn-outline-danger btn-lg">
									<I.TelephoneFill /> Call us now
								</a>
								<a href="" className="ms-1 btn btn-danger btn-lg">
									<I.Pen /> Sign Up Online
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="container mt-5  pb-5">
					<div className="row mb-4">
						<div className="col-sm-6">
							<div className="d-flex ">
								<I.Facebook className="fs-7 p-1 m-1" color="#3b5998" />
								<I.Youtube className="fs-7 p-1 m-1" color="red" />
								<I.Tiktok className="fs-7 p-1 m-1" />
								<I.Instagram className="fs-7 p-1 m-1" color="red" />
							</div>
						</div>
						<div className="col-sm-6">
							<div className="d-flex">
								<Link className="flex-fill nav-link nav p-2" to="/">
									Home
								</Link>
								<Link className="flex-fill nav-link nav p-2" to="/courses">
									Courses
								</Link>
								<Link className="flex-fill nav-link nav p-2" to="/contact">
									Contact
								</Link>
							</div>
						</div>
					</div>
					<div className="text-center border-top pt-2">
						(C) 2024 ProcessGuy, All Rights Reserved
					</div>
				</div>
			</section>
		</>
	);
}

export default Footer;
