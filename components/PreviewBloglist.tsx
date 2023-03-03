'use client';

import { usePreview } from '@/lib/sanity.preview';
import React from 'react';
import BlogList from './BlogList';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
type Props = {
	query: string;
};
const PreviewBloglist = ({ query }: Props) => {
	const posts = usePreview(null, query);
	return <BlogList posts={posts} />;
};

export default PreviewBloglist;
