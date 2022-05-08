import { createSlice } from '@reduxjs/toolkit'

const initialState = {
		posts: []
}

const postsSlice = createSlice({
		name: 'postsSlice',
		initialState,
		reducers: {
				savePosts: (state, action) => {
						state.posts = action.payload
				},
				filterPosts: (state, action) => {
						const searchValue = action.payload;
						const reg = new RegExp(searchValue, 'g')
						state.posts.forEach(post => {
								if (searchValue === ''){
										post.searched = false
								} else if (reg.test(post.body) || reg.test(post.title)) {
										post.searched = true
								} else {
										post.searched = false
								}
						})
				},
				sortPosts: (state, action) => {
						const sortValue = action.payload;
						if (sortValue === 'id') {
								state.posts.sort((a, b) => a.id - b.id)
						} else if (sortValue === 'title') {
								state.posts.sort((a, b) => a.title.localeCompare(b.title))
						} else {
								state.posts.sort((a, b) => a.body.localeCompare(b.body))
						}
				}
		}
})

export const { savePosts, filterPosts, sortPosts } = postsSlice.actions
export default postsSlice.reducer