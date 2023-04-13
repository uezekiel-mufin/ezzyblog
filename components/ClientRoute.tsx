'use client';

import Link from 'next/link';
import React from 'react';

const ClientRoute = ({
	children,
	route,
	query,
}: {
	children: React.ReactNode;
	route: string;
	query: string;
}) => {
	return <Link href={{ pathname: route, query: query }}>{children}</Link>;
	// return <a href=''>{children}</a>;
};

export default ClientRoute;
