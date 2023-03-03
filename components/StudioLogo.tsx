import Image from 'next/image';
import React from 'react';

const StudioLogo = (props: any) => {
	const { renderDefault, title } = props;
	return (
		<div className='flex items-center space-x-2'>
			<Image
				className='rounded-full object-cover'
				height={50}
				width={50}
				src='/images/Apple_Watch_SE_gold_hero.webp'
				alt='logo'
			/>
			<>{renderDefault(props)}</>
		</div>
	);
};

export default StudioLogo;
