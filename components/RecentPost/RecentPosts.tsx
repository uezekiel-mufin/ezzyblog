import React from 'react';
import RecentPost from './RecentPost';

type Props = {
	posts: Post[];
};
const RecentPosts = ({ posts }: Props) => {
	return (
		<div>
			<div className='grid gap-4'>
				{posts.map((post) => (
					<RecentPost key={post._id} post={post} />
				))}
			</div>
		</div>
	);
};

export default RecentPosts;
