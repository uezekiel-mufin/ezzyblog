import React from 'react';
import RandomPosts from '../RandomPost/RandomPosts';
import RecentPosts from '../RecentPost/RecentPosts';
import AdSense from './AdSense';

type Props = {
	posts: Post[];
};
const Sidebar = ({ posts }: Props) => {
	return (
		<div className=''>
			<section className='space-y-16'>
				<section>
					<h2>Recent Posts</h2>
					<RecentPosts posts={posts} />
				</section>
				<section>
					<h2>Random Posts</h2>
					<RandomPosts posts={posts} />
				</section>
			</section>
			<section>
				<AdSense />
			</section>
		</div>
	);
};

export default Sidebar;
