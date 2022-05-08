import React from 'react';

const TableBody = ({page, posts}) => {
		return (
				<tbody>
				{
						posts.map((post,idx) =>
								idx <= page * 10-1
								&& idx >= (page - 1) * 10
								&&
								<tr key={post.id} className={post.searched ? 'searched' : ''}>
										<td>{post.id}</td>
										<td>{post.title}</td>
										<td>{post.body}</td>
								</tr>
						)
				}
				</tbody>
		);
};

export default TableBody;