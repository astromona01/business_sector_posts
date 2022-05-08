import React from 'react';
import {Button, Pagination} from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

const Pages = ({currentPage, pages}) => {
		const navigate = useNavigate()

		const switchPage = (direction) => {
				if (direction === 'right') {
						if (currentPage === pages.length) {
								navigate(`/${pages.length}`)
						} else {
								navigate(`/${currentPage + 1}`)
						}
				}else {
						if (currentPage === 1) {
								navigate(`/${1}`)
						} else {
								navigate(`/${currentPage - 1}`)
						}
				}
		}
		return (
				<div className="pagination-btns">
						<Button onClick={() => switchPage('left')} variant={'outline-dark'}>Назад</Button>
						<Pagination>
								{
										pages.map(page =>
												<Pagination.Item
														key={page}
														active={page === currentPage}
														onClick={() => navigate(`/${page}`)}
												>{page}
												</Pagination.Item>
										)
								}
						</Pagination>
						<Button onClick={() => switchPage('right')} variant={'outline-dark'}>Далее</Button>
				</div>
		);
};

export default Pages;