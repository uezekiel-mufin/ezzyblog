'use client';
import urlFor from '@/lib/urlFor';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
	post: Post;
};
const BlogPost = ({ post }: Props) => {
	const [showRead, setShowRead] = useState(false);

	const controls = useAnimation();
	const { ref, inView } = useInView({ triggerOnce: true });
	const boxVariants = {
		hidden: { marginTop: '150px' },
		visible: {
			marginTop: '0px',
			transition: {
				duration: 0.5,
			},
		},
	};

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
		if (!inView) {
			controls.start('hidden');
		}
	}, [inView, controls]);

	return (
		<motion.div
			ref={ref}
			initial='hidden'
			animate={controls}
			variants={boxVariants}
			className='shadow-sm py-3 cursor-pointer hover:scale-[1.01] ease-linear transition-all duration-300'>
			<div
				className={`relative w-full h-[400px] drop-shadow-xl rounded-lg`}
				onMouseEnter={() => setShowRead(!showRead)}
				onMouseLeave={() => setShowRead(!showRead)}>
				<Image
					className='object-cover object-left lg:object-center rounded-lg'
					src={urlFor(post.mainImage).url()}
					alt={post.author.name}
					fill
				/>
			</div>
			<div className='mt-3 flex-1 space-y-2'>
				<div className='flex justify-between'>
					<p className='text-skin-name rounded-full text-sm font-semibold'>
						{post?.categories[0].title.split(' ')[0]}
					</p>
					<p className='text-base flex gap-1 text-skin-name items-center'>
						<AiOutlineClockCircle className='h-4 w-6' />{' '}
						<span className=''>{`${post?.time} min Read` || '5 min Read'}</span>
					</p>
				</div>
				<div>
					<p className='text-base md:text-2xl flex justify-between text-skin-title font-bold line-clamp-1'>
						{post.title}
					</p>
				</div>
				<p className='line-clamp-2  text-skin-description text-sm'>{post?.description}</p>
				<div className='flex justify-between mt-2 items-center'>
					<div className='flex items-center gap-2'>
						<div>
							<Image
								className='rounded-full'
								src={urlFor(post.author.image).url()}
								alt={post.author.name}
								height={30}
								width={30}
							/>
						</div>
						<p className='text-sm text-skin-date'>
							By <span className='text-skin-name font-semibold text-base'>{post.author.name}</span>
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default BlogPost;
