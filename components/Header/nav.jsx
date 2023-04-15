import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { BsFillMoonFill, BsSun } from 'react-icons/bs';

const Navbar = ({ openMenu }) => {
	const links = [
		{
			id: 1,
			name: 'About',
			link: 'about',
		},
		{
			id: 2,
			name: 'FAQ',
			link: 'faq',
		},
		{
			id: 3,
			name: 'Contact Us',
			link: 'contact',
		},
	];

	const socials = [
		{
			id: 1,
			name: 'Facebook',
			links: 'https://facebook.com/Ezzywealth',
		},
		{
			id: 2,
			name: 'Twitter',
			links: 'https://twitter.com/Ezzywealth',
		},
		{
			id: 3,
			name: 'LinkedIn',
			links: 'https://linkedin.com/ezekiel-udiomuno',
		},
	];
	const [theme, setTheme] = useState('light');

	const handleTheme = (color) => {
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
		<main className='text-textLight transition-all duration-300 ease-linear flex items-center w-full md:justify-between py-6 px-4 m:px-12  md:pb-10'>
			<span className='flex md:hidden justify-end' onClick={() => openMenu()}>
				<AiOutlineMenuFold className='h-8 text-orange-500 w-8' />
			</span>
			<h1 className='text-skin-name text-2xl flex-1 md:flex-none text-center'>Tech Talks</h1>
			<span className='md:hidden'>
				{theme === 'light' ? (
					<BsFillMoonFill
						className='h-7 text-skin-name w-7 cursor-pointer'
						onClick={() => handleTheme('light')}
					/>
				) : (
					<BsSun
						className='h-7 text-skin-name w-7 cursor-pointer'
						onClick={() => handleTheme('dark')}
					/>
				)}
			</span>
			<div className='hidden md:flex gap-4 divide-x-2 divide-[#56585c]'>
				<nav className='text-[#949598] flex gap-4 text-base '>
					{links.map((link) => (
						<Link key={link.id} href={`/${link.link}`}>
							{link.name}
						</Link>
					))}
				</nav>
				<nav className='text-[#949598] pl-4 flex gap-4 text-base '>
					{socials.map((social) => (
						<a key={social.id} href={social.links} target='_blank' rel='noreferrer'>
							{social.name}
						</a>
					))}
				</nav>
			</div>
		</main>
	);
};

export default Navbar;
