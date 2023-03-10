import React from 'react';
import ClientRoute from '../ClientRoute';
import RandomPost from './RandomPost';

type Props = {
	posts: Post[];
};
const RandomPosts = ({ posts }: Props) => {
	return (
		<div className='grid gap-6'>
			{posts.map((post) => (
				<ClientRoute key={post._id} route={`posts/${post.slug.current}`}>
					<RandomPost key={post._id} post={post} />
				</ClientRoute>
			))}
		</div>
	);
};

export default RandomPosts;
