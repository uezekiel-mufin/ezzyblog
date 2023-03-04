import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import React from 'react';

type Props = {
	params: {
		slug: string;
	};
};

const query = groq`
*[_type=='post' && slug.current == $slug][0]{
	...,
	author->,
	categories[]->,
}
`;

const Post = async ({ params: { slug } }: Props) => {
	const post: Post = await client.fetch(query, { slug });
	console.log(post);
	return <div>{slug}</div>;
};

export default Post;
