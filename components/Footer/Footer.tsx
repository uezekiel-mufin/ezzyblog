'use client';
import React from 'react';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';

const FooterSection = () => {
	return (
		<main className='pt-8 md:pt-12 bg-[#333] w-full '>
			<h2 className='text-3xl text-orange-500 mb-4 px-4'>Ezzy Blog</h2>
			<section className='divide-y-2 divide-gray-600'>
				<FooterTop />
				<FooterBottom />
			</section>
		</main>
	);
};

export default FooterSection;
