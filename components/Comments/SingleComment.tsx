import React from 'react';
import DateFormatter from '../DateFormatter';

type Props = {
	comment: Comment;
	firstParentId: String;
};
const SingleComment = ({ comment, firstParentId }: Props) => {
	return (
		<div className='mb-4'>
			<h3 className='font-semibold text-xl'>{comment.name} says:</h3>
			<p>
				<DateFormatter date={comment._createdAt} />
			</p>
			<p className='text-lg'>{comment.comment}</p>
		</div>
	);
};

export default SingleComment;
