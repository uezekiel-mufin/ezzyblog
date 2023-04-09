import React from 'react';
import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaInstagram,
} from 'react-icons/fa';
import SubscribeForm from './SubscribeForm';

const socials = [
	{
		id: 1,
		icon: <FaFacebookF />,
	},
	{
		id: 2,
		icon: <FaTwitter />,
	},
	{
		id: 3,
		icon: <FaLinkedinIn />,
	},
	{
		id: 4,
		icon: <FaInstagram />,
	},
];
const FooterTop = () => {
	return (
		<main className=' py-8'>
			<section className='flex flex-col-reverse md:grid md:grid-cols-2 gap-8'>
				<section className='text-[#eeeeee] text-xl space-y-4'>
					<h3 className='text-2xl'>Contact US</h3>
					<h4 className=''>
						Email: <span>eudiomuno@yahoo.com</span>
					</h4>
					<div className='flex gap-4 text-2xl'>
						{socials.map((social) => (
							<span key={social.id}>{social.icon}</span>
						))}
					</div>
				</section>
				<section>
					<SubscribeForm />
				</section>
			</section>
		</main>
	);
};

export default FooterTop;
