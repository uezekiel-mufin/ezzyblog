'use client';
import React, { useState } from 'react';
import AddReply from './AddReply';
import Comments from './Comments';
import SingleComment from './SingleComment';

type Props = {
	comment: Comment[];
	firstParentId: String;
};
const DisplayComments = ({ comment, firstParentId }: Props) => {
	const [showReplyBox, setShowReplyBox] = useState(false);
	const toggleReplyBox = () => setShowReplyBox(!showReplyBox);

	return (
		<main className='my-12 bg-gray-100 rounded-lg'>
			<section className='border-pink-200 space-y-4 border px-4 py-8'>
				{comment.map((comment) => (
					<div key={comment._id} className='p-5 border-gray-400 border'>
						<SingleComment firstParentId={firstParentId} comment={comment} />

						<button onClick={toggleReplyBox} className='font-semibold'>
							{showReplyBox ? 'Cancel' : 'Reply'}
						</button>
						{showReplyBox && (
							<AddReply
								parentCommentId={comment._id}
								firstParentId={firstParentId || comment._id}
							/>
						)}
						{comment.childComments && (
							<ul>
								{comment.childComments.map((childComment) => (
									<li
										key={childComment._id}
										id={comment._id}
										className={firstParentId ? 'ml-8' : ''}>
										<SingleComment
											comment={childComment}
											firstParentId={firstParentId || comment._id}
										/>
									</li>
								))}
							</ul>
						)}
					</div>
				))}
			</section>
		</main>
	);
};

export default DisplayComments;
