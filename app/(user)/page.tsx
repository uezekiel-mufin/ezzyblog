import React from 'react';
import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import PreviewSuspense from '../../components/PreviewSuspense';
import PreviewBloglist from '@/components/PreviewBloglist';
import BlogList from '@/components/BlogList';

const query = groq`
*[_type=='post']{
	...,
	author->,
	categories[]->,
} | order(_createdAt desc)
`;

const HomePage = async () => {
	if (previewData()) {
		return (
			<PreviewSuspense
				fallback={
					<div role='status'>
						<p className='text-center text-lg animate-pulse text-pink-500'>
							Loading Preview Data...
						</p>
					</div>
				}>
				<PreviewBloglist query={query} />
			</PreviewSuspense>
		);
	}

	const posts = await client.fetch(query);
	console.log(posts);
	return (
		<div className='text-5xl'>
			<BlogList posts={posts} />
		</div>
	);
};

export default HomePage;
