import urlFor from '@/lib/urlFor';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

type Props = {
	post: Post;
};
const BlogPost = ({ post }: Props) => {
	return (
		<div key={post._id}>
			<div className='relative w-full h-80 drop-shadow-xl hover:scale-105 transition-transform duration-200'>
				<Image
					className='object-cover object-left lg:object-center'
					src={urlFor(post.mainImage).url()}
					alt={post.author.name}
					fill
				/>
				<div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
					<div>
						<p className='text-base'>
							{new Date(post._createdAt).toLocaleDateString('en-US', {
								day: 'numeric',
								month: 'long',
								year: 'numeric',
							})}
						</p>
					</div>
					<div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
						{post?.categories?.map((category, index) => (
							<div
								key={index}
								className='bg-pink-500 text-center text-black px-3 py-1 rounded-full text-sm font-semibold'>
								<p>{category.title}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='mt-5 flex-1'>
				<p className='underline text-lg font-bold'>{post.title}</p>
				<p className='line-clamp-2 text-gray-500 text-sm'>
					{post?.description}
				</p>
			</div>
			<p className='mt-5 font-bold text-xl flex items-center hover:underline'>
				Read Post <ArrowRightIcon className='ml-2 h-4 w-4' />
			</p>
		</div>
	);
};

export default BlogPost;
