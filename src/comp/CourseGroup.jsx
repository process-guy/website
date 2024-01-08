import OneCourse from "./OneCourse";
import { useState } from "react";

function CourseGroup(props) {
	const [courseList, setCourseList] = useState(props.datasource);
	const [selectedLevel, setselectedLevel] = useState("");
	const result = [];
	const level = [];
	const levelButton = [];

	for (const course of courseList) {
		result.push(
			<div key={course.id} className="col-sm-6 col-md-4">
				<OneCourse info={course} />
			</div>
		);
	}

	for (const course of props.datasource) {
		level.push(course.level);
	}

	levelButton.push(
		<a
			onClick={() => {
				handleLevelClick("");
			}}
			className={
				selectedLevel == ""
					? "ms-3 btn btn-primary "
					: "ms-3 btn btn-outline-primary "
			}
			key="0">
			All
		</a>
	);
	level.filter((value, index, self) => {
		if (self.indexOf(value) === index) {
			levelButton.push(
				<a
					onClick={() => {
						handleLevelClick(value);
					}}
					className={
						selectedLevel == value
							? "ms-3 btn btn-primary "
							: "ms-3 btn btn-outline-primary "
					}
					key={index}>
					{value}
				</a>
			);
		}
	});

	function handleLevelClick(selected) {
		setselectedLevel(selected);
		if (selected == "") {
			setCourseList(props.datasource);
		} else {
			const new_list = [];
			props.datasource.filter((value) => {
				if (value.level == selected) {
					new_list.push(value);
				}
			});
			setCourseList(new_list);
		}
	}

	return (
		<>
			<div className="row">
				<div className="col">
					You don't have to struggle alone, you've got our assistance and help.
				</div>
				<div className="col text-end">{levelButton}</div>
			</div>
			<div className="course row mt-3 g-4">{result}</div>
		</>
	);
}

export default CourseGroup;
