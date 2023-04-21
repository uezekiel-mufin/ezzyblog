'use client';
import React, { useState } from 'react';
import Categories from './categories';
import SideNav from '../SideNav';

const Header = () => {
	const [menu, setMenu] = useState(false);

	const openMenu = () => {
		setMenu(true);
	};
	const closeMenu = () => {
		setMenu(false);
	};

	return (
		<header className='fixed top-0 w-full z-10'>
			<div className='bg-[#333]'>
				<Categories openMenu={openMenu} />
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
