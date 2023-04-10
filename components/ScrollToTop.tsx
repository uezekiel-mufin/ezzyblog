'use client';
import React, { useState, useEffect } from 'react';
import { RiArrowUpFill } from 'react-icons/ri';

const ScrollToTop = () => {
	const [scroll, setScroll] = useState(false);
	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > 800 && !scroll) {
				setScroll(true);
			} else if (currentScrollY <= 800 && scroll) {
				setScroll(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [scroll]);

	if (!scroll) return null;
	return (
		<div
			onClick={handleScrollToTop}
			className='bg-orange-500 transition-opacity duration-300 ease-in-out rounded-full cursor-pointer h-10 w-10 text-orange-200 flex justify-center items-center'>
			<RiArrowUpFill className='h-8 w-8' />
		</div>
	);
};

export default ScrollToTop;
