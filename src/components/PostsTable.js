import {useDispatch, useSelector} from "react-redux";
import {Table} from "react-bootstrap";
import {Fragment, useEffect, useState} from "react";
import {fetchPosts} from "../http/postsApi";
import {savePosts} from "../reducers/postsSlice";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Pages from "./Pages";
import {useParams, useNavigate} from "react-router-dom";

const PostsTable = () => {
		const posts = useSelector(state => state.posts)
		const dispatch = useDispatch();
		const navigate = useNavigate()
		const currentPage = parseInt(useParams().id)

		let pages = []
		for (let i = 0; i < posts.length/10; i++) {
				pages.push(i+1)
		}

		useEffect(() => {
				fetchPosts().then(posts => {
						dispatch(savePosts(posts.data))
				})
				!currentPage && navigate('/1')
		}, [])

		return (
				pages.map(page =>
						page === currentPage &&
						<Fragment key={page}>
								<Table striped hover>
										<TableHead />
										<TableBody page={page} posts={posts}/>
								</Table>
								<Pages
										currentPage={currentPage}
										pages={pages}
								/>
						</Fragment>
				)
		);
};

export default PostsTable;