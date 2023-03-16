import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'comment',
	title: 'Comment',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'approved',
			title: 'Approved',
			type: 'boolean',
			description: "Comments won't show on the site without approval",
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
		}),
		defineField({
			name: 'comment',
			title: 'Comment',
			type: 'text',
		}),
		defineField({
			name: 'reply',
			title: 'Reply',
			type: 'text',
		}),
		defineField({
			name: 'childComments',
			title: 'Child Comments',
			type: 'array',
			of: [{ type: 'comment' }],
		}),
		defineField({
			name: 'post',
			title: 'Post',
			type: 'reference',
			to: [{ type: 'post' }],
		}),
	],
});
