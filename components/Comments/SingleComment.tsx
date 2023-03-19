'use client';
import React, { useState } from 'react';
import DateFormatter from '../DateFormatter';
import AddReply from './AddReply';

type Props = {
	comment: Comment;
	toggleId: string;
	firstParentId: string;
	showReplyBox: boolean;
	toggleReplyBox: (id: string) => void;
};
const SingleComment = ({
	comment,
	firstParentId,
	toggleId,
	showReplyBox,
	toggleReplyBox,
}: Props) => {
	return (
		<div className='mb-2'>
			<h3 className='font-semibold text-xl capitalize text-orange-500'>{comment.name}</h3>
			<p className='italic'>
				<DateFormatter date={comment._createdAt} />
			</p>
			<p className='text-xl cursor-pointer '>{comment.comment}</p>
		</div>
	);
};

export default SingleComment;
