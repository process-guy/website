function Box(props) {
	return (
		<>
			<div class="box">
				<div>{props.icon}</div>
				<h3 class="mt-3 mb-4">{props.title}</h3>
				<div>read more</div>
			</div>
		</>
	);
}

export default Box;
