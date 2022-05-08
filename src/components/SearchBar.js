import '../styles/searchBar/searchBar.css'
import {FormControl, InputGroup} from "react-bootstrap";
import search from '../assets/search.svg'
import { useDispatch } from "react-redux";
import {filterPosts} from "../reducers/postsSlice";

const SearchBar = () => {
		const dispatch = useDispatch()

		const searchValue = (e) => {
				dispatch(filterPosts(e.target.value))
		}
		return (
				<InputGroup size="lg" className="input-wrapper">
						<FormControl
								aria-label="Large"
								className="search-input"
								aria-describedby="inputGroup-sizing-sm"
								placeholder="Поиск"
								onInput={searchValue}
						/>
						<img src={search} alt="search"/>
				</InputGroup>
		);
};

export default SearchBar;