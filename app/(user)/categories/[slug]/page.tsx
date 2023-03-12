import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import ClientRoute from '@/components/ClientRoute';
import CategoryPost from '@/components/CategoryPost';

type Props = {
	params: {
		slug: string;
	};
};

const query = groq`*[_type == "post" && references(*[_type == "category" && title == $slug]._id)] {
    _id,
    title,
    body,
    "categories": categories[]->title
  }`;

const Page = async ({ params: { slug } }: Props) => {
	const query = groq`*[_type == "post" && references(*[_type == "category" && title == $slug]._id)] {
	...,
   author->,
	categories[]->,
  }`;
	const posts = await client.fetch(query, { slug });

	return (
		<div className=''>
			<h2 className='text-2xl capitalize font-semibold border-b border-gray-400 pb-3 mb-6'>
				{slug}
			</h2>
			{posts.length < 1 && (
				<h2 className='text-2xl'>
					There are no articles for{' '}
					<span className='text-2xl capitalize'>{slug}</span> category
				</h2>
			)}
			<div className='grid grid-cols-1  md:grid-cols-2 gap-10 gap-y-16 pb-24 cursor-pointer'>
				{posts.map((post: Post, index: number) => (
					<section
						key={post._id}
						className={`shadow-lg p-3 ${
							index % 3 === 0 && 'md:col-start-1 md:col-end-3'
						}`}>
						<ClientRoute key={post._id} route={`posts/${post.slug.current}`}>
							<CategoryPost post={post} />
						</ClientRoute>
					</section>
				))}
			</div>
		</div>
	);
};

export default Page;
