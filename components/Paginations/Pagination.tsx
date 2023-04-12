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
	numOfPages: number;
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
	numOfPages,
}: Props) => {
	const handleNext = () => {
		if (currentPage === numOfPages) {
			return;
		} else {
			setStartCount(startCount + itemsPerPage);
			setEndCount(endCount + itemsPerPage);
			setPageItems(posts.slice(startCount, endCount));
			setCurrentPage((prev) => prev + 1);
			window.scrollTo({
				top: 0,
				behavior: 'auto',
			});
		}
	};
	const handlePrev = () => {
		if (currentPage === 1) {
			return;
		} else {
			setStartCount(startCount - itemsPerPage);
			setEndCount(endCount - itemsPerPage);
			setPageItems(posts.slice(startCount, endCount));
			setCurrentPage((prev) => prev - 1);
			window.scrollTo({
				top: 0,
				behavior: 'auto',
			});
		}
	};

	const handleJump = (num: number) => {
		setStartCount(num * itemsPerPage - itemsPerPage);
		setEndCount(num * itemsPerPage);
		setPageItems(posts.slice(startCount, endCount));
		setCurrentPage(num);
		window.scrollTo({
			top: 0,
			behavior: 'auto',
		});
	};

	if (numOfPages === 1) return null;

	return (
		<div className='flex relative py-3 justify-center text-skin-title font-semibold px-4 my-4 mb-20'>
			<button
				className='px-4  py-1 border border-skin-paginateBorder text-base rounded-md tracking-wider hover:scale-105 transition-all duration-300 ease-in-out'
				onClick={handlePrev}>
				{currentPage === 1 ? 'First Page' : 'Prev Page'}
			</button>

			<div className='flex items-center mx-4 gap-1'>
				{
					//convert the number of pages to an array
					[...Array(numOfPages)].map((item, ind) => (
						<button
							onClick={() => handleJump(ind + 1)}
							key={ind}
							className={`border-skin-paginateBorder font-semibold cursor-pointer h-8 w-8 flex items-center text-base  justify-center border ${
								currentPage === ind + 1 ? 'bg-orange-500' : ''
							}`}>
							{ind + 1}
						</button>
					))
				}
			</div>

			<button
				className='px-4 py-1 border border-skin-paginateBorder text-base rounded-md tracking-wider hover:scale-105 transition-all duration-300 ease-in-out'
				onClick={handleNext}>
				{currentPage === numOfPages ? 'Last Page' : 'Next Page'}
			</button>
		</div>
	);
};

export default Pagination;
