import React from 'react';
import { useForm } from 'react-hook-form';

type Data = {
	name: String;
	email: String;
};

const SubscribeForm = () => {
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
			<form
				onSubmit={handleSubmit(formSubmit)}
				className='border border-gray-400 p-4 md:p-8 space-y-4  w-full '>
				<h3 className='capitalize text-xl md:text-2xl lg:text-3xl font-semibold text-[#eeeeee]'>
					Subscribe to our newsletter
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
				<button
					type='submit'
					className='bg-orange-700 px-4 py-2 rounded-lg w-full text-[#eeeeee] text-2xl'>
					Subscribe
				</button>
			</form>
		</div>
	);
};

export default SubscribeForm;
