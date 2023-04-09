'use client';
import React from 'react';

type Props = {
	setPageItems: React.Dispatch<React.SetStateAction<Post[]>>;
	startCount: number;
	endCount: number;
	setStartCount: React.Dispatch<React.SetStateAction<number>>;
	setEndCount: React.Dispatch<React.SetStateAction<number>>;
	itemsPerPage: number;
	posts: Post[];
	currentPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	num: number;
};

const Pagination = ({
	setPageItems,
	startCount,
	endCount,
	setStartCount,
	setEndCount,
	itemsPerPage,
	posts,
	currentPage,
	setCurrentPage,
	num,
}: Props) => {
	const handleNext = () => {
		if (currentPage === num) {
			return;
		} else {
			setStartCount(startCount + itemsPerPage);
			setEndCount(endCount + itemsPerPage);
			setPageItems(posts.slice(startCount, endCount));
			setCurrentPage((prev) => prev + 1);
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	};
	const handlePrev = () => {
		console.log(currentPage);
		if (currentPage === 1) {
			return;
		} else {
			setStartCount(startCount - itemsPerPage);
			setEndCount(endCount - itemsPerPage);
			setPageItems(posts.slice(startCount, endCount));
			setCurrentPage((prev) => prev - 1);
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	};

	if (num === 1) return null;
	return (
		<div className='flex relative py-3 justify-between text-skin-title font-semibold px-4 mt-4'>
			{currentPage > 1 && (
				<button
					className='px-4 absolute left-0 py-1 border border-skin-paginateBorder text-base rounded-md tracking-wider hover:scale-105 transition-all duration-300 ease-in-out'
					onClick={handlePrev}>
					Prev Page
				</button>
			)}
			{currentPage < num && (
				<button
					className='px-4 absolute right-0 py-1 border border-skin-paginateBorder text-base rounded-md tracking-wider hover:scale-105 transition-all duration-300 ease-in-out'
					onClick={handleNext}>
					Next Page
				</button>
			)}
		</div>
	);
};

export default Pagination;
