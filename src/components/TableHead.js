import ArrowBottom from '../assets/arrow_bottom.svg'
import { useDispatch } from "react-redux";
import { sortPosts } from "../reducers/postsSlice";

const TableHead = () => {
		const dispatch = useDispatch();
		const sort = (sortValue) => {
				dispatch(sortPosts(sortValue))
		}
		return (
				<thead>
						<tr>
								<th onClick={() => sort('id')}>ID <img src={ArrowBottom} alt="arrow"/></th>
								<th onClick={() => sort('title')}>Заголовок <img src={ArrowBottom} alt="arrow"/></th>
								<th onClick={() => sort('body')}>Описание <img src={ArrowBottom} alt="arrow"/></th>
						</tr>
				</thead>
		);
};

export default TableHead;