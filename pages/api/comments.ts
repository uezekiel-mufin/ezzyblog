// This Next.js template already is configured to write with this Sanity Client
import { client } from '@/lib/sanity.client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function createComment(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// Destructure the pieces of our request
	const { id, name, email, comment } = JSON.parse(req.body);
	try {
		// Use our Client to create a new document in Sanity with an object
		await client.create({
			_type: 'comment',
			post: {
				_type: 'reference',
				_ref: id,
			},
			name,
			email,
			comment,
		});
	} catch (err) {
		console.error(err);
		return res.status(500).json({ message: `Couldn't submit comment`, err });
	}

	return res.status(200).json({ message: 'Comment submitted' });
}
