'use client';
import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Link from 'next/link';
import { FaHome, FaReact } from 'react-icons/fa';
import { TbBrandNextjs, TbDeviceComputerCamera } from 'react-icons/tb';
import { SiBmcsoftware } from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';
import {
	FaFacebook,
	FaTwitter,
	FaLinkedinIn,
	FaQuestionCircle,
	FaInfoCircle,
} from 'react-icons/fa';
import { FcContacts } from 'react-icons/fc';

type Props = {
	closeMenu: Function;
};

const categories = [
	{
		id: 1,
		name: 'Home',
		link: '/',
		icon: <FaHome />,
	},
	{
		id: 2,
		name: 'Nextjs',
		link: 'nextjs',
		icon: <TbBrandNextjs />,
	},
	{
		id: 3,
		name: 'JavaScript',
		link: 'javascript',
		icon: <DiJavascript />,
	},
	{
		id: 4,
		name: 'Programming',
		link: 'programming',
		icon: <TbDeviceComputerCamera />,
	},
	{
		id: 5,
		name: 'Software',
		link: 'software',
		icon: <SiBmcsoftware />,
	},
	{
		id: 6,
		name: 'Reactjs',
		link: 'reactjs',
		icon: <FaReact />,
	},
];

const links = [
	{
		id: 1,
		name: 'About',
		link: '/about',
		icon: <FaInfoCircle />,
	},
	{
		id: 2,
		name: 'FAQ',
		link: '/faq',
		icon: <FaQuestionCircle />,
	},
	{
		id: 3,
		name: 'Contact Us',
		link: '/contact',
		icon: <FcContacts />,
	},
];

const socials = [
	{
		id: 1,
		name: 'Facebook',
		links: 'https://facebook.com/Ezzywealth',
		icon: <FaFacebook />,
	},
	{
		id: 2,
		name: 'Twitter',
		links: 'https://twitter.com/Ezzywealth',
		icon: <FaTwitter />,
	},
	{
		id: 3,
		name: 'LinkedIn',
		links: 'https://linkedin.com/ezekiel-udiomuno',
		icon: <FaLinkedinIn />,
	},
];

const SideNav = ({ closeMenu }: Props) => {
	const [activeLink, setActiveLink] = useState(0);

	const linkClick = (id: number) => {
		closeMenu();
		setActiveLink(id);
	};

	return (
		<div className='fixed top-0 left-0 right-0 bg-[#333] w-full z-100 flex  px-4 md:px-24 py-4 md:py-7 h-screen'>
			<div className='flex flex-col gap-4 w-full '>
				<div className='flex justify-between items-center'>
					<h1 className='text-3xl  text-orange-500 font-bold'>Ezzy Blog</h1>
					<span className='md:hidden cursor-pointer flex p-3 text-2xl' aria-hidden='true'>
						<AiOutlineCloseCircle onClick={() => closeMenu()} className='h-8 w-8 text-orange-500' />
					</span>
				</div>
				<nav className='flex flex-col gap-4 border-t border-gray-600 pt-4 items-start'>
					{categories.map((link) => (
						<li
							key={link.id}
							className={`list-none hover:scale-105   font-semibold w-full  transition-all ease-in-out duration-300 ${
								activeLink === link.id ? 'text-black text-2xl' : 'text-[#eeeeee] text-xl'
							}`}
							onClick={() => linkClick(link.id)}
							aria-hidden='true'>
							<Link
								href={link.name === 'Home' ? '/' : `categories/${link.link}`}
								className='flex items-center gap-3'>
								<span className='text-skin-name'>{link.icon}</span>
								<span>{link.name}</span>
							</Link>
						</li>
					))}
				</nav>

				<section className='border-t pt-4 flex flex-col gap-4 text-xl border-gray-600'>
					{links.map((link) => (
						<li key={link.id} onClick={() => linkClick(link.id)} className='list-none'>
							<Link href={`${link.link}`} className='flex items-center gap-3 list-none'>
								<span className='text-skin-name'>{link.icon}</span>
								<span className='text-[#eeeeee]'>{link.name}</span>
							</Link>
						</li>
					))}
				</section>
				<section className='border-t pt-4 flex flex-col gap-4 text-xl border-gray-600'>
					{socials.map((social) => (
						<li onClick={() => linkClick(social.id)} key={social.id} className=' list-none'>
							<a
								href={social.links}
								target='_blank'
								rel='noreferrer'
								className='flex items-center gap-3'>
								<span className='text-skin-name'>{social.icon}</span>
								<span className='text-[#eeeeee]'>{social.name}</span>
							</a>
						</li>
					))}
				</section>
			</div>
		</div>
	);
};

export default SideNav;
