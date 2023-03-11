import React from 'react';

const FooterBottom = () => {
	console.log(new Date());
	return (
		<div className='text-[#eeeeee] text-xl text-center py-4 tracking-wider'>
			{' '}
			&copy; {new Date().getFullYear()}{' '}
			<span className='text-orange-500'>Ezzy Tech</span>, Inc.
		</div>
	);
};

export default FooterBottom;
