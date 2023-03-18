import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
	parentCommentId: String;
	firstParentId: String;
};

type Data = {
	name: String;
	email: String;
	comment: String;
	parentCommentId: String;
	firstParentId: String;
};

const AddReply = ({ parentCommentId, firstParentId }: Props) => {
	const formRef = useRef<HTMLFormElement>(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Data>();

	const formSubmit = async (data: Data) => {
		console.log(data);
		if (parentCommentId) {
			data.parentCommentId = parentCommentId;
		}
		console.log(data);

		if (formRef.current) {
			formRef.current.reset();
		}
		toast.success('Your reply has been added successfully');
		// try {
		// 	await fetch('/api/comments', {
		// 		method: 'POST',
		// 		body: JSON.stringify({ ...data, id: firstParentId }),
		// 	});
		// } catch (err) {
		// 	console.log(err);
		// }
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
				<button
					type='submit'
					className='bg-orange-700 px-4 py-2 rounded-lg w-full text-[#eeeeee] text-2xl'>
					Post Reply
				</button>
			</form>
		</div>
	);
};

export default AddReply;
