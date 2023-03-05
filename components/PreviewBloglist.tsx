'use client';

import { usePreview } from '@/lib/sanity.preview';
import React from 'react';
import BlogList from './BlogLists';

type Props = {
	query: string;
};
const PreviewBloglist = ({ query }: Props) => {
	const posts = usePreview(null, query);
	return <BlogList posts={posts} />;
};

export default PreviewBloglist;
