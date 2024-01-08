import { Outlet, Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

function Layout() {
	return (
		<>
			<section className="top-part1 container-fluid">
				<Navbar expand="sm">
					<Container className="pt-3">
						<Navbar.Brand>
							<img src="/logo-wt.svg" width="200px" />
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse
							className="justify-content-end"
							id="basic-navbar-nav">
							<Nav>
								<Link to="/" className="nav-link">
									Home
								</Link>
								<Link to="/courses" className="nav-link">
									Courses
								</Link>
								<Link to="/contact" className="nav-link">
									Contact
								</Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</section>
			<Outlet />
		</>
	);
}

export default Layout;
