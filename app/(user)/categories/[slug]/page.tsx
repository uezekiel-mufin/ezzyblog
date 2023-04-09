import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import { Metadata } from 'next';
import CategoryPage from '@/components/Category/CategoryPage';

type Props = {
	params: {
		slug: string;
	};
};

// dynamic page title
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	return {
		title: params.slug,
	};
}

// fetch posts by category query
const query = groq`*[_type == "post" && references(*[_type == "category" && title == $slug]._id)] {
	...,
   author->,
	categories[]->,
  }`;

const Page = async ({ params: { slug } }: Props) => {
	// fetch posts by category
	const posts: Post[] = await client.fetch(query, { slug });

	return (
		<div className=''>
			<h2 className='text-2xl capitalize text-skin-title font-semibold border-b border-gray-400 pb-3 mb-6'>
				{slug}
			</h2>
			{posts.length < 1 && (
				<h2 className='text-2xl'>
					There are no articles for <span className='text-2xl capitalize'>{slug}</span> category
				</h2>
			)}
			<CategoryPage posts={posts} />
		</div>
	);
};

export default Page;
