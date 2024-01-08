import {
	JournalAlbum,
	StarFill,
	ArrowRightCircle,
} from "react-bootstrap-icons";

function OneCourse(props) {
	const rprice =
		props.info.cost - (props.info.cost * props.info.discount) / 100;

	return (
		<>
			<div className="card shadow-lg ">
				<img src={props.info.image} />
				<div className="card-body">
					<div className="d-flex align-items-center justify-content-between">
						<div className="fw-300 small">
							<JournalAlbum /> {props.info.lessons} Lessons
						</div>
						<div className="fw-300 small">
							<StarFill color="orange" /> 4.5/5
						</div>
					</div>
					<h5 className="mt-3 mb-4 fw-400 fs-6">{props.info.title}</h5>
					<div className="course_more d-flex align-items-center justify-content-between">
						<div>
							<span className="text-danger fw-500">${rprice}</span>{" "}
							<s>{props.info.cost}</s>
						</div>
						<div>
							more <ArrowRightCircle />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default OneCourse;
