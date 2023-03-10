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
			<div className='grid grid-cols-2 w-full h-40 drop-shadow-xl hover:scale-105 transition-transform duration-200'>
				<div className='relative block'>
					<Image
						className='object-cover object-left lg:object-center'
						src={urlFor(post.mainImage).url()}
						alt={post.author.name}
						fill
					/>
				</div>
				<div className=' w-full bg-opacity-20 rounded drop-shadow-lg text-white p-5 flex justify-between'>
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
		</div>
	);
};

export default RecentPost;
