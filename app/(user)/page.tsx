import React from 'react';
import { previewData } from 'next/headers';

const HomePage = () => {
	if (previewData()) {
		return <>I am in preview mode</>;
	}
	return <div className='text-5xl'>HomePage, not in preview mode</div>;
};

export default HomePage;
