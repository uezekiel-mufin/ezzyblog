'use client';
import React from 'react';
import RelatedPosts from '../RelatedPost/RelatedPosts';
import RecentPosts from '../RecentPost/RecentPosts';
import { usePathname } from 'next/navigation';

type Props = {
	posts: Post[];
};

const Sidebar = ({ posts }: Props) => {
	const pathName = usePathname();
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
					<RelatedPosts />
				</section>
			</section>
		</div>
	);
};

export default Sidebar;
