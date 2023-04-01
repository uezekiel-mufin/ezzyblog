import urlFor from '@/lib/urlFor';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

type Props = {
	post: Post;
};
const BlogPost = ({ post }: Props) => {
	return (
		<div className='shadow-sm border-b border-skin-bgBorder border-solid p-5 hover:scale-105 transition-transform duration-200'>
			<div className='relative w-full h-[400px] drop-shadow-xl'>
				<Image
					className='object-cover object-left lg:object-center'
					src={urlFor(post.mainImage).url()}
					alt={post.author.name}
					fill
				/>
				<div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
					<div>
						<p className='underline text-lg font-bold'>{post.title}</p>
					</div>
				</div>
			</div>
			<div className='mt-3 flex-1'>
				<div className='flex justify-between mb-3'>
					<span className='flex gap-3 items-center'>
						<p className='text-sm text-skin-date'>
							By <span className='text-skin-name font-semibold text-base'>{post.author.name}</span>
						</p>
						<p className='text-sm text-skin-date italic'>
							on{' '}
							{new Date(post._createdAt).toLocaleDateString('en-US', {
								day: 'numeric',
								month: 'long',
								year: 'numeric',
							})}
						</p>
					</span>
					<p className='text-skin-name rounded-full text-sm font-semibold'>
						{post?.categories[0].title.split(' ')[0]}
					</p>
				</div>

				<p className='line-clamp-2 text-skin-description text-sm'>{post?.description}</p>
			</div>
			<button
				type='button'
				className='bg-skin-bgBtn px-3 py-1 rounded-lg hover:scale-105 transition-all duration-300 ease-linear mt-3 font-bold text-base text-skin-readPost flex items-center hover:underline'>
				Read Post <ArrowRightIcon className='ml-2 h-4 w-4' />
			</button>
		</div>
	);
};

export default BlogPost;
