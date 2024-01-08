function Box(props) {
	return (
		<>
			<div className="box">
				<div>{props.icon}</div>
				<h4 className="mt-3 mb-4">{props.title}</h4>
				<div>read more</div>
			</div>
		</>
	);
}

export default Box;
