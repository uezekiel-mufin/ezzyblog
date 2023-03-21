import React from 'react';
import BlogPost from './BlogPost';
import ClientRoute from './ClientRoute';

type Props = {
	posts: Post[];
};
const BlogList = ({ posts }: Props) => {
	return (
		<div className=''>
			<h2 className='text-2xl font-semibold text-skin-title border-b border-gray-400 pb-3 mb-6'>
				Featured Posts
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-16 pb-24 cursor-pointer'>
				{posts.map((post, index) => (
					<section key={post._id} className={`${index % 3 === 0 && 'md:col-start-1 md:col-end-3'}`}>
						<ClientRoute route={`posts/${post.slug.current}`}>
							<BlogPost post={post} />
						</ClientRoute>
					</section>
				))}
			</div>
		</div>
	);
};

export default BlogList;
