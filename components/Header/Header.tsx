import React from 'react';
import Navbar from './nav';
import Categories from './categories';

const Header = () => {
	return (
		<header>
			<div className='bg-[#333] divide-y-2 divide-[#949598]'>
				<Navbar />
				<Categories />
			</div>
		</header>
	);
};

export default Header;
