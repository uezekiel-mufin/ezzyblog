'use client';
import React from 'react';

type Props = {
	comment: Comment[];
};
const DisplayComments = ({ comment }: Props) => {
	console.log(comment);
	return (
		<main className='my-12 bg-gray-100 rounded-lg'>
			<section className='border-pink-200 border px-4 py-8'>
				{comment.map((comment) => (
					<div key={comment._id} className='p-5 border-gray-400 border'>
						<div className='mb-4'>
							<h3 className='font-semibold text-xl'>{comment.name} says:</h3>
							<p>
								{new Date(comment._createdAt).toLocaleString('en-us', {
									day: 'numeric',
									year: 'numeric',
									month: 'long',
									hour: 'numeric',
									second: 'numeric',
									minute: 'numeric',
								})}
							</p>
						</div>
						<p className='text-lg'>{comment.comment}</p>
						<div>
							<h3 className='text-2xl font-semibold'>Admin reply</h3>
							<p>{comment.reply}</p>
						</div>
					</div>
				))}
			</section>
		</main>
	);
};

export default DisplayComments;
