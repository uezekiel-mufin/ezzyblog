import Image from 'next/image';
import Link from 'next/link';
import urlFor from '@/lib/urlFor';

export const RichTextComponent = {
	image: ({ value }: any) => (
		<div className='relative w-[500px] h-[500px] m-10 mx-auto'>
			<Image src={urlFor(value).url()} alt='blog post image' fill />
		</div>
	),
	list: {
		bullet: ({ children }: any) => (
			<ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>
		),
		number: ({ children }: any) => (
			<ul className='mt-lg list-decimal'>{children}</ul>
		),
	},
	block: {
		h1: ({ children }: any) => (
			<h1 className='text-5xl py-10 font-bold'>{children}</h1>
		),
		h2: ({ children }: any) => (
			<h2 className='text-4xl py-10 font-bold'>{children}</h2>
		),
		h3: ({ children }: any) => (
			<h3 className='text-3xl py-10 font-bold'>{children}</h3>
		),
		h4: ({ children }: any) => (
			<h4 className='text-2xl py-10 font-bold'>{children}</h4>
		),
	},
	blockQuote: ({ children }: any) => (
		<blockquote className='border-l-pink-500 border-l-4 pl-5 py-5 my-5'>
			{children}
		</blockquote>
	),

	marks: {
		link: ({ children, value }: any) => {
			const rel = !value.href.startsWith('/')
				? 'noreferrer noopener'
				: undefined;
			return (
				<Link
					href={value.href}
					rel={rel}
					className='underline decoration-pink-500 hover:decoration-black'>
					{children}
				</Link>
			);
		},
	},
};
