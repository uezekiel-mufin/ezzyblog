import React from 'react';

type Props = {
	comment: Comment[];
};
const DisplayComments = ({ comment }: Props) => {
	return (
		<main className='my-12'>
			<section className='border-pink-200 border px-4 py-8'>
				{comment.map((comment) => (
					<div key={comment._id}>
						<h3 className='font-semibold text-xl'>{comment.name} says:</h3>
						<p>{comment.comment}</p>
					</div>
				))}
			</section>
		</main>
	);
};

export default DisplayComments;
