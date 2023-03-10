'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ClientRoute from '../ClientRoute';

const categories = [
	{
		id: 1,
		name: 'Home',
		link: '/',
	},
	{
		id: 2,
		name: 'Nextjs',
		link: 'Nextjs',
	},
	{
		id: 3,
		name: 'JavaScript',
		link: 'JavaScript',
	},
	{
		id: 4,
		name: 'Programming',
		link: 'Programming',
	},
	{
		id: 5,
		name: 'Tech News',
		link: 'Tech-News',
	},
	{
		id: 6,
		name: 'Reactjs',
		link: 'Reactjs',
	},
];
const Categories = () => {
	const pathname = usePathname();
	console.log(pathname);
	return (
		<div className='py-8'>
			<nav className='hidden md:flex gap-12 ml-12 text-white pl-20 text-xl'>
				{categories.map((link) => (
					<ClientRoute
						key={link.id}
						route={link.name === 'Home' ? '/' : `categories/${link.link}`}>
						<li
							className={`list-none ${
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
