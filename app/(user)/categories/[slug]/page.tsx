import { groq } from 'next-sanity';
import React from 'react';
import { client } from '@/lib/sanity.client';
import CategoriesList from '@/components/CategoryPost';
import ClientRoute from '@/components/ClientRoute';

import CategoryPost from '@/components/CategoryPost';

type Props = {
	params: {
		slug: string;
	};
};

const query = groq`*[_type == "post" && references(*[_type == "category" && title == $slug]._id)] {
    _id,
    title,
    body,
    "categories": categories[]->title
  }`;

const Page = async ({ params: { slug } }: Props) => {
	const query = groq`*[_type == "post" && references(*[_type == "category" && title == $slug]._id)] {
	...,
   author->,
	categories[]->,
  }`;
	console.log(slug);
	const results = await client.fetch(query, { slug });
	console.log(results);
	return (
		<div className=''>
			<h2 className='text-2xl capitalize font-semibold border-b border-gray-400 pb-3 mb-6'>
				{slug}
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-16 pb-24 cursor-pointer'>
				{results.map((post) => (
					<ClientRoute key={post._id} route={`posts/${post.slug.current}`}>
						<CategoryPost post={post} />
					</ClientRoute>
				))}
			</div>
		</div>
	);
};

export default Page;
