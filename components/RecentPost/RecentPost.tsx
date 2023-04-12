import urlFor from '@/lib/urlFor';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

type Props = {
	post: Post;
};
const RecentPost = ({ post }: Props) => {
	return (
		<div key={post._id}>
			<div className='grid grid-cols-2 shadow-lg p-3 gap-3 w-full drop-shadow-xl hover:scale-105 transition-all ease-linear duration-300'>
				<div className='relative block'>
					<Image
						className='object-cover object-left lg:object-center'
						src={urlFor(post.mainImage).url()}
						alt={post.author.name}
						fill
					/>
				</div>
				<div className='flex justify-center gap-2 flex-col'>
					<p className='text-skin-name rounded-full text-sm font-semibold'>
						{post?.categories[0].title}
					</p>

					<p className=' text-skin-title font-semibold text-xl line-clamp-2'>{post.title}</p>
					<h3 className='text-orange-400'>
						<span className='text-skin-name'>By </span>
						{post.author.name}
					</h3>
					<span className='text-skin-date italic'>
						{' '}
						{new Date(post._createdAt).toLocaleDateString('en-US', {
							day: 'numeric',
							month: 'long',
							year: 'numeric',
						})}
					</span>
				</div>
			</div>
		</div>
	);
};

export default RecentPost;
