import { useSelector, useDispatch } from "react-redux";
import { PencilSVG, TrashSVG } from "@/icons";
import {
	deleteSacContent,
	fetchSacContents,
	setModalOpen,
	setSelectedSacContent,
} from "@/modules";
import { useEffect } from "react";

export function Table() {
	const state = useSelector((state) => state.saccontent);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSacContents());
	}, [dispatch]);

	return (
		<table className="table">
			<thead className="table__head">
				<tr>
					<th>제목</th>
					<th>장소</th>
					<th>형식</th>
					<th>시작일</th>
					<th>종료일</th>
					<th>관객수</th>
				</tr>
			</thead>

			<tbody className="table__body">
				{state.saccontentList.map(({ _id, title, place, type, startDate, endDate, audience }) => (
					<tr key={_id}>
						<td>{title}</td>
						<td>{place}</td>
						<td>{type}</td>
						<td>{startDate}</td>
						<td>{endDate}</td>
						<td>{audience}</td>
						<td>
							<button
								className="btn btn__compact btn__edit"
								onClick={() => {
									dispatch(setSelectedSacContent(_id));
									dispatch(setModalOpen(true));
								}}
							>
								<PencilSVG />
							</button>
							<button
								className="btn btn__compact btn__delete"
								onClick={() => {
									dispatch(deleteSacContent(_id));
								}}
							>
								<TrashSVG />
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
