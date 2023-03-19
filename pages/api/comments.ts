// This Next.js template already is configured to write with this Sanity Client
import { client } from '@/lib/sanity.client';
import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { nanoid } from 'nanoid';

export default async function createComment(req: NextApiRequest, res: NextApiResponse) {
	// Destructure the pieces of our request
	const doc = JSON.parse(req.body);

	try {
		// Use our Client to create a new document in Sanity with an object
		if (doc.parentCommentId) {
			// Remove these values from the document, as they're not expected in the database
			const firstParentId = doc.id;
			const parentCommentId = doc.parentCommentId;
			delete doc.parentCommentId;
			delete doc.id;

			const result = await appendChildComment(firstParentId, parentCommentId, {
				...doc,
				_id: nanoid(),
				_key: nanoid(),
			});
			console.log(result);
			return res.status(200).json({ message: 'nested Comment submitted', data: result });
		} else {
			await client.create({
				_type: 'comment',
				post: {
					_type: 'reference',
					_ref: doc.id,
				},
				name: doc.name,
				email: doc.email,
				comment: doc.comment,
				_id: nanoid(),
				_key: nanoid(),
			});
		}
	} catch (err) {
		console.error(err);
		return res.status(500).json({ message: `Couldn't submit comment`, err });
	}

	return res.status(200).json({ message: 'Comment submitted' });
}

async function appendChildComment(
	firstParentId: string,
	parentCommentId: string,
	childComment: Comment
) {
	// Get the first level parent comment
	const query = groq`*[_type == "comment" && _id == $parentCommentId][0]`;
	const parentComment = await client.fetch(query, { parentCommentId });

	if (!parentComment.childComments) {
		// Parent Comment has no children, just create a new Array with the child comment
		parentComment.childComments = [childComment];
	} else if (parentComment._id === parentCommentId) {
		// Parent Comment is a first level comment, so just append the comment
		parentComment.childComments = [
			...parentComment.childComments.filter((c: Comment) => c._id !== childComment._id),
			childComment,
		];
		// The filter is not necessary right now, but in case you want to add an Edit
		// functionality, you'll need this.
	} else {
		// Parent comment is a level two or more nested comment
		// We need to find the actual parent comment in all nested comments
		const childToUpdate = getChildComment(parentComment, parentCommentId);
		console.log(childToUpdate);
		if (!childToUpdate.childComments) {
			// Parent comment has no children, create new Array with the new child
			childToUpdate.childComments = [childComment];
		} else {
			// Parent comment already has some children
			// Append the new childComment
			childToUpdate.childComments = [
				...childToUpdate.childComments.filter((c: Comment) => c._id !== childComment._id),
				childComment,
			];
		}
	}

	// Patch the document
	await client.patch(parentComment._id).set(parentComment).commit();
}

function getChildComment(firstParentComment: Comment, parentCommentId: string) {
	let returnComment: Comment = firstParentComment;
	firstParentComment?.childComments?.forEach((c) => {
		if (c._id == parentCommentId) {
			returnComment = c;
		} else if (c.childComments) {
			returnComment = getChildComment(c, parentCommentId);
		} else {
			return returnComment;
		}
	});
	return returnComment;
}
