import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ClientRoute from '../ClientRoute';
import RelatedPost from './RelatedPost';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';

const revalidate = 60;
const query = groq`*[_type == "post" && references(*[_type == "category" && title == $search]._id)] {
	...,
   author->,
	categories[]->,
  }`;

const RelatedPosts = () => {
	const searchParams = useSearchParams();
	const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
	const search = searchParams?.get('search');
	const getPossiblePosts = async () => {
		if (relatedPosts.length) {
			setRelatedPosts([]);
		}
		const fetchedRelatedPosts = await client.fetch(query, { search });
		setRelatedPosts(fetchedRelatedPosts);
	};
	useEffect(() => {
		getPossiblePosts();
	}, []);

	if (relatedPosts.length < 1) {
		return null;
	}
	return (
		<div>
			<h2 className='text-2xl font-semibold text-skin-title border-b border-gray-400 pb-3 mb-6'>
				Related Posts
			</h2>
			<div className='grid gap-6'>
				{relatedPosts.map((post) => (
					<ClientRoute
						key={post._id}
						route={`posts/${post.slug.current}`}
						query={`search=${post?.categories[0].title.split(' ')[0]}`}>
						<RelatedPost key={post._id} post={post} />
					</ClientRoute>
				))}
			</div>
		</div>
	);
};

export default RelatedPosts;
