'use client';
import React, { useState } from 'react';

type Props = {
	pageItems: Post[];
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
	pageItems,
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
		console.log(currentPage);
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
	return (
		<div className='flex border-t border-orange-300 border-solid py-3 justify-between text-orange-200 px-4 mt-4'>
			{currentPage > 1 && (
				<button
					className='px-4  py-1 border border-orange-300 text-base rounded-md tracking-wider hover:scale-105 transition-all duration-300 ease-in-out'
					onClick={handlePrev}>
					Prev
				</button>
			)}
			{currentPage < num && (
				<button
					className='px-4 float-right py-1 border border-orange-300 text-base rounded-md tracking-wider hover:scale-105 transition-all duration-300 ease-in-out'
					onClick={handleNext}>
					Next
				</button>
			)}
		</div>
	);
};

export default Pagination;
