import { JournalAlbum } from "react-bootstrap-icons";

function OneCourse(props) {
	return (
		<>
			<div class="card">
				<img src="/c1.jpg" />
				<div class="card-body">
					<div class="d-flex align-items-center justify-content-between">
						<div>
							<JournalAlbum /> {props.info.lessons} Lessons
						</div>
						<div>Ratings</div>
					</div>
					<h5 class="mt-3 mb-4">{props.info.title}</h5>
					<div class="course_more d-flex align-items-center justify-content-between">
						<div>${props.info.cost} Cost</div>
						<div>Learn more</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default OneCourse;
