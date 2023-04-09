'use client';
import React, { useState } from 'react';
import ClientRoute from '../ClientRoute';
import Pagination from '../Paginations/Pagination';
import CategoryPost from './CategoryPost';

type Props = {
	posts: Post[];
};

const itemsPerPage = 5;
const CategoryPage = ({ posts }: Props) => {
	const [startCount, setStartCount] = useState(0);
	const [endCount, setEndCount] = useState(itemsPerPage);
	const [pageItems, setPageItems] = useState(posts.slice(startCount, endCount));
	const [currentPage, setCurrentPage] = useState(1);
	const numOfPages = Math.ceil(posts.length / itemsPerPage);
	return (
		<div>
			<div className='grid grid-cols-1 border-skin-bgBorder  gap-10 gap-y-16 pb-24 cursor-pointer'>
				{pageItems.map((post: Post, index: number) => (
					<section key={post._id}>
						<ClientRoute
							key={post._id}
							route={`posts/${post.slug.current}`}
							query={`search=${post?.categories[0].title.split(' ')[0]}`}>
							<CategoryPost post={post} />
						</ClientRoute>
					</section>
				))}
			</div>
			<Pagination
				setPageItems={setPageItems}
				startCount={startCount}
				endCount={endCount}
				setStartCount={setStartCount}
				setEndCount={setEndCount}
				itemsPerPage={itemsPerPage}
				posts={posts}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				num={numOfPages}
			/>
		</div>
	);
};

export default CategoryPage;
