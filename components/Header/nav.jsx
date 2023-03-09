import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	const links = ['About', 'FAQ', 'Contact Us'];
	const socials = ['Facebook', 'Twitter', 'Instagram'];
	return (
		<main className='text-[#56585c] flex justify-between p-20 pb-10'>
			<div>Ezzy Blog</div>
			<div className='flex gap-4 divide-x-2 divide-[#56585c]'>
				<nav className='text-[#949598] flex gap-4 text-xl '>
					{links.map((link) => (
						<Link key={link} href={`/${link}`}>
							{link}
						</Link>
					))}
				</nav>
				<nav className='text-[#949598] pl-4 flex gap-4 text-xl '>
					{socials.map((social) => (
						<Link key={social} href={`/${social}`}>
							{social}
						</Link>
					))}
				</nav>
			</div>
		</main>
	);
};

export default Navbar;
