import React from 'react';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const StudioNavbar = (props: any) => {
	return (
		<div>
			<div className='flex items-center justify-between p-5'>
				<Link href='/' className='text-pink-600 flex items-center'>
					<ArrowUturnLeftIcon className='h-6 w-6 text-pink-600' /> Go to website
				</Link>
			</div>

			<>{props.renderDefault(props)}</>
		</div>
	);
};

export default StudioNavbar;
