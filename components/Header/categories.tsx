'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import ClientRoute from '../ClientRoute';
import { BsFillMoonFill, BsSun } from 'react-icons/bs';
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

type CategoriesProps = {
	openMenu: () => void;
};
const Categories = ({ openMenu }: CategoriesProps) => {
	const pathname = usePathname();
	const [theme, setTheme] = useState('light');

	const handleTheme = (color: string) => {
		if (color === 'light') {
			setTheme('dark');
			document.body.classList.remove('theme-light');
			document.body.classList.add('theme-dark');
		} else {
			setTheme('light');
			document.body.classList.remove('theme-dark');
			document.body.classList.add('theme-light');
		}
	};

	useEffect(() => {
		handleTheme('dark');
	}, []);
	return (
		<div className='flex py-4 px-4 md:py-8 justify-between'>
			<span className='flex md:hidden justify-end' onClick={() => openMenu()}>
				<AiOutlineMenuFold className='h-8 text-orange-500 w-8' />
			</span>
			<h1 className='text-skin-name text-2xl flex-1 md:flex-none text-center'>Tech Talks</h1>
			<nav className='hidden md:flex gap-12 ml-12 text-white pl-20 text-xl'>
				{categories.map((link) => (
					<ClientRoute query='' key={link.id} route={link.name === 'Home' ? '/' : `categories/${link.link}`}>
						<li className={`list-none capitalize ${pathname === `/categories/${link.link}` ? 'text-' : 'text-gray-300'}`}>{link.name}</li>
					</ClientRoute>
				))}
			</nav>
			<span className=''>{theme === 'light' ? <BsFillMoonFill className='h-7 text-skin-name w-7 cursor-pointer' onClick={() => handleTheme('light')} /> : <BsSun className='h-7 text-skin-name w-7 cursor-pointer' onClick={() => handleTheme('dark')} />}</span>
		</div>
	);
};

export default Categories;
