import React from 'react';

type Props = {
	params: {
		slug: string;
	};
};
const Page = ({ params: { slug } }: Props) => {
	console.log(slug);
	return <div>{slug}</div>;
};

export default Page;
