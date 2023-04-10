'use client';
import React, { useState } from 'react';
import BlogPost from './BlogPost';
import ClientRoute from './ClientRoute';
import Pagination from './Paginations/Pagination';

type Props = {
	posts: Post[];
};

const itemsPerPage = 6;
const BlogList = ({ posts }: Props) => {
	const [startCount, setStartCount] = useState(0);
	const [endCount, setEndCount] = useState(itemsPerPage);
	const [pageItems, setPageItems] = useState(posts.slice(startCount, endCount));
	const [currentPage, setCurrentPage] = useState(1);
	const numOfPages = Math.ceil(posts.length / itemsPerPage);
	return (
		<div className=''>
			<h2 className='text-2xl font-semibold text-skin-title border-b border-gray-400 pb-3 mb-6'>
				Featured Posts
			</h2>
			<div className='grid grid-cols-1 gap-1 gap-y-16 pb-24'>
				{pageItems.map((post, index) => (
					<section key={post._id}>
						<ClientRoute
							route={`posts/${post.slug.current}`}
							query={`search=${post?.categories[0].title.split(' ')[0]}`}>
							<BlogPost post={post} />
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

export default BlogList;
