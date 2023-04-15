'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './nav';
import Categories from './categories';
import SideNav from '../SideNav';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Header = () => {
	const [menu, setMenu] = useState(false);
	const [showNavbar, setShowNavbar] = useState(true);
	const controls = useAnimation();
	const { ref } = useInView();

	const boxVariants = {
		hidden: { height: '0px', opacity: 0 },
		visible: {
			height: '100%',
			opacity: 1,
			transition: {
				duration: 5,
			},
		},
	};

	const openMenu = () => {
		setMenu(true);
	};
	const closeMenu = () => {
		setMenu(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > 100) {
				setShowNavbar(false);
				controls.start('hidden');
			} else if (currentScrollY <= 100) {
				setShowNavbar(true);
				controls.start('visible');
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [showNavbar, controls]);

	return (
		<header className='fixed top-0 w-full z-10'>
			<div className={`bg-[#333]  ${showNavbar ? 'divide-[#949598] divide-y-2' : ''}`}>
				<motion.div ref={ref} variants={boxVariants} animate={controls}>
					<Navbar openMenu={openMenu} />
				</motion.div>

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
