const FeedbackForm = () => {
	return (
		<form className='text-white max-w-lg space-y-5'>
			<div className='grid grid-rows-2 grid-cols-2 gap-3'>
				<input
					type='text'
					className='bg-[#FFFFFF33] rounded-lg p-4 uppercase'
					placeholder='Ваше Имя'
				/>
				<input
					type='text'
					className='bg-[#FFFFFF33] rounded-lg p-4 uppercase'
					placeholder='Ваш Телефон'
				/>
				<input
					type='text'
					className='bg-[#FFFFFF33] rounded-lg col-span-2 p-4 uppercase'
          placeholder='Сообщение'
				/>
			</div>
			<div className='flex space-x-4 items-center'>
				<button
					type='submit'
					className='text-red-700 bg-white rounded-md px-7 py-4 font-extrabold uppercase'
				>
					ОСТАВИТЬ ЗАЯВКУ
				</button>
				<div>
					<p className='text-[#C9C9C9]'>
						ИЛИ ЗВОНИТЕ ПО НОМЕРУ:
					</p>
					<p className='font-bold'>
						+7 (7172) 24-06-09
					</p>
				</div>
			</div>
		</form>
	);
};

export default FeedbackForm;
