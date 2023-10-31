import OneCourse from "./OneCourse";

function CourseGroup(props) {
	const result = [];

	for (const course of props.datasource) {
		result.push(
			<div class="col-sm-6 col-md-4">
				<OneCourse info={course} />
			</div>
		);
	}

	return (
		<>
			<div class="course row mt-4">{result}</div>
		</>
	);
}

export default CourseGroup;
