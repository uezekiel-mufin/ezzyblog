'use client';
import React, { useState } from 'react';
import AddReply from './AddReply';
import SingleComment from './SingleComment';

type Props = {
	comment: Comment[];
	firstParentId: string;
};
const DisplayComments = ({ comment, firstParentId }: Props) => {
	const [showReplyBox, setShowReplyBox] = useState(false);
	const [toggleId, setToggleId] = useState('');
	const toggleReplyBox = (id: string) => {
		setToggleId(id);
		setShowReplyBox(!showReplyBox);
	};
	return (
		<main className='my-12 bg-gray-100 rounded-lg'>
			<section className='border-pink-200 space-y-4 border px-4 pb-8 pt-4'>
				<h2 className='text-2xl font-bold'>Comments</h2>
				{comment.map((comment) => (
					<div key={comment._id} className='p-5 border-gray-400 border-t '>
						<SingleComment
							firstParentId={firstParentId}
							comment={comment}
							toggleId={toggleId}
							toggleReplyBox={toggleReplyBox}
							showReplyBox={showReplyBox}
						/>
						<button
							onClick={() => toggleReplyBox(comment._id)}
							className='font-semibold italic mb-2 bg-pink-500 text-pink-200 px-3 py-1 rounded-lg'>
							{showReplyBox && comment._id === toggleId ? 'Cancel' : 'Reply'}
						</button>
						{showReplyBox && toggleId === comment._id && (
							<AddReply
								parentCommentId={comment._id}
								firstParentId={firstParentId || comment._id}
								setShowReplyBox={setShowReplyBox}
							/>
						)}
						{/* display childComments */}
						{comment.childComments && (
							<ul className='space-y-4'>
								{comment.childComments.map((childComment, index) => (
									<li
										key={index}
										id={comment?._id}
										className={firstParentId ? 'ml-8 border-gray-300 border p-3 shadow-lg' : ''}>
										<SingleComment
											comment={childComment}
											firstParentId={firstParentId || comment._id}
											toggleId={toggleId}
											toggleReplyBox={toggleReplyBox}
											showReplyBox={showReplyBox}
										/>
										{childComment?.childComments?.length > 0 &&
											childComment.childComments.map((childComment, index) => (
												<section className='ml-8' key={index}>
													<SingleComment
														comment={childComment}
														firstParentId={firstParentId || comment._id}
														toggleId={toggleId}
														toggleReplyBox={toggleReplyBox}
														showReplyBox={showReplyBox}
													/>
												</section>
											))}
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
