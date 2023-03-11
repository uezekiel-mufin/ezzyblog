'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import DisplayComments from './DisplayComments';
type Data = {
	name: String;
	email: String;
	comment: String;
};
const Comments = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Data>();

	const formSubmit = (data: Data) => {
		console.log(data);
	};
	return (
		<div className=''>
			<DisplayComments />
			<form
				onSubmit={handleSubmit(formSubmit)}
				className='border border-gray-400 p-4 md:p-8 space-y-4  w-full md:w-[600px] '>
				<h3 className='capitalize text-xl md:text-2xl lg:text-3xl font-semibold text-[#121212]'>
					Leave a comment <br />
					<span className='text-sm'>
						Your email address will not be published.
					</span>
				</h3>
				<div>
					<input
						{...register('name', { required: true })}
						placeholder='First Name or Full Name'
					/>
					{errors.name && (
						<p className='text-red-500 text-xl'>Your name is required.</p>
					)}
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
						<p className='text-red-500 text-xl'>
							Please Enter a valid email address
						</p>
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
					{errors.email && (
						<p className='text-red-500 text-xl'>Please Enter your comments</p>
					)}
				</div>
				<button
					type='submit'
					className='bg-orange-700 px-4 py-2 rounded-lg w-full text-[#eeeeee] text-2xl'>
					Post Comment
				</button>
			</form>
		</div>
	);
};

export default Comments;
