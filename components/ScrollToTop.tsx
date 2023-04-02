'use client';
import React from 'react';
import { RiArrowUpFill } from 'react-icons/ri';

const ScrollToTop = () => {
	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<div
			onClick={handleScrollToTop}
			className='bg-orange-500 rounded-full cursor-pointer h-10 w-10 text-orange-200 flex justify-center items-center'>
			<RiArrowUpFill className='h-8 w-8' />
		</div>
	);
};

export default ScrollToTop;
