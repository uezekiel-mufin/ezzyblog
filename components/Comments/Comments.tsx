'use client';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DisplayComments from './DisplayComments';
import { ColorRing } from 'react-loader-spinner';

type Data = {
	name: String;
	email: String;
	comment: String;
};

type Props = {
	id: string;
	comment: Comment[];
};
const Comments = ({ id, comment }: Props) => {
	const formRef = useRef<HTMLFormElement>(null);
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Data>();
	const formSubmit = async (data: Data) => {
		setLoading(true);

		try {
			await fetch('/api/comments', {
				method: 'POST',
				body: JSON.stringify({ ...data, id }),
			});

			if (formRef.current) {
				formRef.current.reset();
			}
			setLoading(false);
			toast.success('Your comment has been added successfully');
		} catch (err) {
			setLoading(false);
			toast.error('Something went wrong, please try again later');
		}
	};

	return (
		<div className=''>
			{comment.length > 0 && <DisplayComments comment={comment} firstParentId={id} />}
			<ToastContainer position='top-center' />
			<form
				ref={formRef}
				id='form'
				onSubmit={handleSubmit(formSubmit)}
				className='relative border border-gray-400 p-4 md:p-8 space-y-4 mt-12 w-full md:w-[600px]'>
				<h3 className='capitalize text-xl md:text-2xl lg:text-3xl font-semibold text-skin-title'>
					Leave a reply <br />
					<span className='text-sm'>Your email address will not be published.</span>
				</h3>
				<div>
					<input {...register('name', { required: true })} placeholder='First Name or Full Name' />
					{errors.name && <p className='text-red-500 text-xl'>Your name is required.</p>}
				</div>
				<div>
					<input
						{...register('email', {
							required: true,
							pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
						})}
						placeholder='enter email address'
					/>
					{errors.email && (
						<p className='text-red-500 text-xl'>Please Enter a valid email address</p>
					)}
				</div>
				<div>
					<textarea
						rows={7}
						{...register('comment', {
							required: true,
						})}
						placeholder='enter your comment'
					/>
					{errors.email && <p className='text-red-500 text-xl'>Please Enter your comments</p>}
				</div>
				{loading ? (
					<section className='flex justify-center items-center'>
						<ColorRing
							visible={true}
							height='50'
							width='50'
							ariaLabel='blocks-loading'
							wrapperStyle={{}}
							wrapperClass='blocks-wrapper'
							colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
						/>
					</section>
				) : (
					<button
						type='submit'
						className='bg-orange-700 px-4 py-2 rounded-lg w-full text-[#eeeeee] text-2xl'>
						Post Comment
					</button>
				)}
			</form>
		</div>
	);
};

export default Comments;
