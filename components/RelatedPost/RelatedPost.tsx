type Props = {
	post: Post;
};

const RelatedPost = ({ post }: Props) => {
	return (
		<div key={post._id}>
			<div className='grid grid-cols-1 shadow-lg p-3 gap-3 w-full drop-shadow-xl hover:scale-105 transition-transform duration-200'>
				<div className=' flex justify-center gap-2 flex-col'>
					<p className='text-skin-name rounded-full text-sm font-semibold'>
						{post?.categories[0].title}
					</p>

					<p className=' text-skin-title font-semibold text-2xl line-clamp-2'>{post.title}</p>
					<h3 className='text-orange-400'>
						<span className='text-skin-name'>By </span>
						{post.author.name}
					</h3>
					<span className='text-skin-date italic'>
						{' '}
						{new Date(post._createdAt).toLocaleDateString('en-US', {
							day: 'numeric',
							month: 'long',
							year: 'numeric',
						})}
					</span>
				</div>
			</div>
		</div>
	);
};

export default RelatedPost;
