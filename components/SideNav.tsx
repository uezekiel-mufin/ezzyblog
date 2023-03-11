'use client';
import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Link from 'next/link';

type Props = {
	closeMenu: Function;
};

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

const SideNav = ({ closeMenu }: Props) => {
	const [activeLink, setActiveLink] = useState(0);

	const linkClick = (id: number) => {
		closeMenu();
		setActiveLink(id);
	};

	return (
		<div className='fixed top-0 left-0 right-0 bg-[#fff] w-full z-100 flex px-4 md:px-24 py-4 md:py-7 h-screen'>
			<div className='flex flex-col gap-8 w-full '>
				<div className='flex justify-between items-center'>
					<h1 className='text-3xl  text-orange-500 font-bold'>Ezzy Blog</h1>
					<span className='md:hidden flex p-3 text-2xl' aria-hidden='true'>
						<AiOutlineCloseCircle
							onClick={() => closeMenu()}
							className='h-8 w-8 text-orange-500'
						/>
					</span>
				</div>
				<nav className='flex flex-col gap-4 items-start'>
					{categories.map((link) => (
						<li
							key={link.id}
							className={`list-none   font-semibold border-r border-solid  w-full border-orange-500 transition-all ease-in-out duration-300 ${
								activeLink === link.id
									? 'text-black text-2xl'
									: 'text-gray-500 text-xl'
							}`}
							onClick={() => linkClick(link.id)}
							aria-hidden='true'>
							<Link
								href={link.name === 'Home' ? '/' : `categories/${link.link}`}>
								{link.name}
							</Link>
						</li>
					))}
				</nav>
			</div>
		</div>
	);
};

export default SideNav;
