import { Link } from "react-router-dom";

function Menu() {
	return (
		<>
			<h1>Logo</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>{" "}
				</li>
				<li>
					<Link to="/contact">Contact</Link>{" "}
				</li>
			</ul>
		</>
	);
}

export default Menu;
