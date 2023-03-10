import React from 'react';
import BlogPost from './BlogPost';
import ClientRoute from './ClientRoute';

type Props = {
	posts: Post[];
};
const BlogList = ({ posts }: Props) => {
	return (
		<div className=''>
			<div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24 cursor-pointer'>
				{posts.map((post) => (
					<ClientRoute key={post._id} route={`posts/${post.slug.current}`}>
						<BlogPost post={post} />
					</ClientRoute>
				))}
			</div>
		</div>
	);
};

export default BlogList;
