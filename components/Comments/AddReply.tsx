'use client';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ColorRing } from 'react-loader-spinner';
type Props = {
	parentCommentId: String;
	firstParentId: String;
	setShowReplyBox: Function;
};

type Data = {
	name: String;
	email: String;
	comment: String;
	parentCommentId: String;
	firstParentId: String;
};

const AddReply = ({ parentCommentId, firstParentId, setShowReplyBox }: Props) => {
	const formRef = useRef<HTMLFormElement>(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Data>();
	const [loading, setLoading] = useState(false);
	const formSubmit = async (data: Data) => {
		setLoading(true);
		if (parentCommentId) {
			data.parentCommentId = parentCommentId;
		}

		try {
			const result = await fetch('/api/comments', {
				method: 'POST',
				body: JSON.stringify({ ...data, id: firstParentId }),
			});
			if (formRef.current) {
				formRef.current.reset();
			}
			const response = await result.json();
			console.log(response);
			toast.success('Your reply has been added successfully');
			setLoading(false);
		} catch (err) {
			console.log(err);
			setLoading(false);
			toast.error('Something went wrong, please try again later');
		}
		setShowReplyBox(false);
	};
	return (
		<div>
			<ToastContainer position='top-center' />
			<form
				ref={formRef}
				onSubmit={handleSubmit(formSubmit)}
				className='border border-gray-400 p-4  space-y-4  w-full md:w-[400px] '>
				<div>
					<input {...register('name', { required: true })} placeholder='First Name or Full Name' />
					{errors.name && <p className='text-red-500 text-xl'>Your name is required.</p>}
				</div>
				<div>
					<textarea
						rows={4}
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
						Post Reply
					</button>
				)}
			</form>
		</div>
	);
};

export default AddReply;
