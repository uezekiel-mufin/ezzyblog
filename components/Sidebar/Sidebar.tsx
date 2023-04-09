'use client';
import React from 'react';
import RelatedPosts from '../RelatedPost/RelatedPosts';
import RecentPosts from '../RecentPost/RecentPosts';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = {
	posts: Post[];
};

const Sidebar = ({ posts }: Props) => {
	const pathName = usePathname();
	const searchParams = useSearchParams();
	const search = searchParams?.get('search');
	if (pathName === '/about' || pathName === '/contact' || pathName === '/faq') return null;

	return (
		<div className='h-full'>
			<section className='space-y-16'>
				{
					// if search is null, then show recent posts
					!search && (
						<section>
							<h2 className='text-2xl text-skin-title font-semibold border-b border-gray-400 pb-3 mb-6'>
								Recent Posts
							</h2>
							<RecentPosts posts={posts} />
						</section>
					)
				}
				{
					// if search is not null, then show related posts
					search && (
						<section>
							<RelatedPosts />
						</section>
					)
				}
			</section>
		</div>
	);
};

export default Sidebar;
