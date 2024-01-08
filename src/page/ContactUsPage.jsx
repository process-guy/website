import * as I from "react-bootstrap-icons";

export default function ContactUsPage() {
	return (
		<>
			<section className="contact-banner h400">
				<div className="contact-overlay">
					<div className="container text-white">
						<div className="contact-h d-flex align-items-start justify-content-center flex-column h400 ">
							<h1 className="">Contact</h1>
							<div className="">Home. Contact</div>
						</div>
					</div>
				</div>
			</section>

			<section className="mt-5">
				<div className="container pt-4">
					<div className="row">
						<div className="col-md-8">
							<h1>Get Intouch</h1>
							<small>
								Have a question or just want to say hi? We'd love to hear from
								you.
							</small>

							<form className="mt-5">
								<div className="row g-4">
									<div className="col-md-6">
										<input
											required
											name="name"
											className="form-control"
											placeholder="Your Name"
										/>
									</div>
									<div className="col-md-6">
										<input
											required
											name="email"
											className="form-control"
											placeholder="Your Email"
											type="email"
										/>
									</div>
									<div class="col-md-12">
										<input
											name="subject"
											placeholder="Subject"
											required
											className="form-control"
										/>
									</div>
									<div class="col-md-12">
										<textarea
											required
											name="message"
											className="form-control"
											rows="7"
											placeholder="Enter your Message"></textarea>
									</div>
									<div class="col-md-12">
										<button type="submit" className="btn btn-primary">
											Send your message
										</button>
									</div>
								</div>
							</form>
						</div>
						<div className="col-md-4">
							<div className="card card-body shadow border-0 m-2 p-4">
								<div className="row pb-3">
									<div className="col-1">
										<I.Map />
									</div>
									<div className="col-11">
										<div className="fw-600">Head Office</div>
										<p>
											24A providence Street,
											<br />
											Lekki Phase 1,
											<br />
											Lagos, Nigeria.
										</p>
									</div>
								</div>
								<div className="row pb-3">
									<div className="col-1">
										<I.EnvelopeAt />
									</div>
									<div className="col-11">
										<div className="fw-600">Email us directly</div>
										<p>info@processguy.ng</p>
									</div>
								</div>
								<div className="row pb-3">
									<div className="col-1">
										<I.Telephone />
									</div>
									<div className="col-11">
										<div className="fw-600">Phone</div>
										<p>(+234) 08146935599</p>
									</div>
								</div>
								<div className="row pb-3">
									<div className="col-1"></div>
									<div className="col-11">
										<div className="fw-600">Follow us</div>
										<div className="d-flex ">
											<I.Facebook className="fs-7 p-1 m-1" color="#3b5998" />
											<I.Youtube className="fs-7 p-1 m-1" color="red" />
											<I.Tiktok className="fs-7 p-1 m-1" />
											<I.Instagram className="fs-7 p-1 m-1" color="red" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
