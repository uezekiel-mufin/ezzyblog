'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ClientRoute from '../ClientRoute';
import { AiOutlineMenuFold } from 'react-icons/ai';

const categories = [
	{
		id: 1,
		name: 'Home',
		link: '/',
	},
	{
		id: 2,
		name: 'Nextjs',
		link: 'nextjs',
	},
	{
		id: 3,
		name: 'JavaScript',
		link: 'javascript',
	},
	{
		id: 4,
		name: 'Programming',
		link: 'programming',
	},
	{
		id: 5,
		name: 'Software',
		link: 'software',
	},
	{
		id: 6,
		name: 'Reactjs',
		link: 'reactjs',
	},
];
const Categories = ({ openMenu }) => {
	const pathname = usePathname();
	return (
		<div className='py-4 md:py-8'>
			<span
				className='flex md:hidden px-4 justify-end'
				onClick={() => openMenu()}>
				<AiOutlineMenuFold className='h-10 text-orange-500 w-10' />
			</span>
			<nav className='hidden md:flex gap-12 ml-12 text-white pl-20 text-xl'>
				{categories.map((link) => (
					<ClientRoute
						key={link.id}
						route={link.name === 'Home' ? '/' : `categories/${link.link}`}>
						<li
							className={`list-none capitalize ${
								pathname === `/categories/${link.link}`
									? 'text-orange-500'
									: 'text-gray-300'
							}`}>
							{link.name}
						</li>
					</ClientRoute>
				))}
			</nav>
		</div>
	);
};

export default Categories;
