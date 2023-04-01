'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './nav';
import Categories from './categories';
import SideNav from '../SideNav';

const Header = () => {
	const [menu, setMenu] = useState(false);
	const [showNavbar, setShowNavbar] = useState(true);
	const openMenu = () => {
		setMenu(true);
	};
	const closeMenu = () => {
		setMenu(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > 100 && showNavbar) {
				setShowNavbar(false);
			} else if (currentScrollY <= 100 && !showNavbar) {
				setShowNavbar(true);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [showNavbar]);

	return (
		<header className='fixed top-0 w-full z-10'>
			<div className='bg-[#333] divide-y-2 divide-[#949598]'>
				{showNavbar && (
					<div className='transition-all duration-300 ease-linear'>
						<Navbar openMenu={openMenu} />
					</div>
				)}
				<Categories />
				{menu && (
					<div className='animate-slide-in fixed md:hidden top-0 left-0 right-0 h-screen bg-[#fff] w-full'>
						<SideNav closeMenu={closeMenu} />
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
