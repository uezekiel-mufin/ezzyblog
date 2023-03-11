import { client } from '@/lib/sanity.client';
import urlFor from '@/lib/urlFor';
import { groq } from 'next-sanity';
import Image from 'next/image';
import React from 'react';
import { PortableText } from '@portabletext/react';
import { RichTextComponent } from '@/components/RichTextComponent';

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
// caching and ssr
export const revalidate = 60;
export async function generateStaticParams() {
	const query = groq`*[_type=='post']{slug}`;

	const slugs: Post[] = await client.fetch(query);
	const slugRoutes = slugs.map((slug) => slug.slug.current);

	return slugRoutes.map((slug) => ({ slug }));
}

const Post = async ({ params: { slug } }: Props) => {
	const post: Post = await client.fetch(query, { slug });
	return (
		<article className=' w-full pb-20 overflow-auto'>
			<section className='space-y-2 border border-pink-500 mb-8 text-white'>
				<div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
					<div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
						<Image
							className='object-cover object-center mx-auto'
							src={urlFor(post.mainImage).url()}
							alt={post.author.name}
							fill
						/>
					</div>
					<section className='p-5 bg-orange-500 w-full'>
						<div className='flex flex-col md:flex-row justify-between gap-y-5'>
							<div>
								<h1 className='text-4xl font-extrabold'>{post.title}</h1>
							</div>
						</div>
						<p className='italic pt-10'>{post.description}</p>
						<div className='flex flex-col md:flex-row justify-between mt-4'>
							<div className='flex flex-1 w-full items-center space-x-2'>
								<div>
									<Image
										className='rounded-full'
										src={urlFor(post.author.image).url()}
										alt={post.author.name}
										height={50}
										width={50}
									/>
								</div>
								<div className=' flex'>
									<h3 className='flex flex-col md:flex-row '>
										By {post.author.name}{' '}
										<p className='flex flex-1 italic gap-2'>
											on
											<span>
												{new Date(post._createdAt).toLocaleDateString('en-US', {
													day: 'numeric',
													year: 'numeric',
													month: 'long',
												})}
											</span>
										</p>
									</h3>
								</div>
							</div>
							<div className='flex items-center justify-end space-x-2'>
								<p className='bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold'>
									{post.categories[0].title}
								</p>
							</div>
						</div>
					</section>
				</div>
			</section>
			<PortableText value={post.body} components={RichTextComponent} />
		</article>
	);
};

export default Post;
