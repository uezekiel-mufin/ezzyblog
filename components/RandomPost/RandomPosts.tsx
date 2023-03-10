import React from 'react';
import RandomPost from './RandomPost';

type Props = {
	posts: Post[];
};
const RandomPosts = ({ posts }: Props) => {
	return (
		<div className='grid gap-6'>
			{posts.map((post) => (
				<RandomPost key={post._id} post={post} />
			))}
		</div>
	);
};

export default RandomPosts;
