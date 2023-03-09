import React from 'react';

const Page = ({ params: { slug } }) => {
	console.log(slug);
	return <div>{slug}</div>;
};

export default Page;
