import urlFor from '@/lib/urlFor';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

type Props = {
	post: Post;
};
const CategoryPost = ({ post }: Props) => {
	console.log(post);
	return (
		<div className='shadow-sm border-b border-skin-bgBorder border-solid p-5 hover:scale-105 transition-transform duration-200'>
			<div className='relative border-skin-bgBorder w-full h-80 drop-shadow-xl'>
				<Image
					className='object-cover object-left lg:object-center'
					src={urlFor(post.mainImage).url()}
					alt={post.author.name}
					fill
				/>
				<div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
					<div>
						<p className='underline text-lg font-bold text-skin-title'>{post.title}</p>
					</div>
				</div>
			</div>
			<div className='mt-3 flex-1'>
				<div className='flex justify-between mb-3'>
					<span className='flex gap-3 text-skin-title items-center'>
						<p className='text-sm '>
							By <span className='text-orange-500 text-base'>{post.author.name}</span>
						</p>
						<p className='text-sm italic'>
							on{' '}
							{new Date(post._createdAt).toLocaleDateString('en-US', {
								day: 'numeric',
								month: 'long',
								year: 'numeric',
							})}
						</p>
					</span>
					<p className='text-orange-400 rounded-full text-sm font-semibold'>
						{post?.categories[0].title.split(' ')[0]}
					</p>
				</div>

				<p className='line-clamp-2 text-gray-500 text-sm'>{post?.description}</p>
			</div>
			<p className='mt-3 font-bold text-xl text-gray-500 flex items-center hover:underline'>
				Read Post <ArrowRightIcon className='ml-2 h-4 w-4' />
			</p>
		</div>
	);
};

export default CategoryPost;
