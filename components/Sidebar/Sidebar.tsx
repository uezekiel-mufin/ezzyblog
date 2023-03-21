'use client';
import React from 'react';
import RandomPosts from '../RandomPost/RandomPosts';
import RecentPosts from '../RecentPost/RecentPosts';
import AdSense from './AdSense';
import { usePathname } from 'next/navigation';

type Props = {
	posts: Post[];
};
const Sidebar = ({ posts }: Props) => {
	const pathName = usePathname();
	console.log(pathName);

	if (pathName === '/about' || pathName === '/contact' || pathName === '/faq') return null;
	return (
		<div className='h-full'>
			<section className='space-y-16'>
				<section>
					<h2 className='text-2xl text-skin-title font-semibold border-b border-gray-400 pb-3 mb-6'>
						Recent Posts
					</h2>
					<RecentPosts posts={posts} />
				</section>
				<section>
					<h2 className='text-2xl font-semibold text-skin-title border-b border-gray-400 pb-3 mb-6'>
						Random Posts
					</h2>
					<RandomPosts posts={posts} />
				</section>
			</section>
			<section>{/* <AdSense /> */}</section>
		</div>
	);
};

export default Sidebar;
