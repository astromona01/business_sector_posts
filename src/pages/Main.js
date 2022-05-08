import '../main.css'
import SearchBar from "../components/SearchBar";
import PostsTable from "../components/PostsTable";


const Main = () => {
		return (
				<div className="main">
						<SearchBar />
						<PostsTable />
				</div>
		);
};

export default Main;