import React from 'react';
import Navbar from './nav';
import Categories from './categories';

const Header = () => {
	return (
		<header className='fixed top-0 w-full z-10'>
			<div className='bg-[#333] divide-y-2 divide-[#949598]'>
				<Navbar />
				<Categories />
			</div>
		</header>
	);
};

export default Header;
