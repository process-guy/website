function Box(props) {
	return (
		<>
			<div class="box">
				<div>{props.img}</div>
				<h3 class="mt-3 mb-1">{props.title}</h3>
				<div>read more</div>
			</div>
		</>
	);
}

export default Box;
