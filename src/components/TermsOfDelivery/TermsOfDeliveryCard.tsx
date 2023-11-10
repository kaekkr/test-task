type TermsOfDeliveryCardProps = {
	imgSrc: string;
	title: string;
	text: string;
	type: number;
};

const TermsOfDeliveryCard = ({
	imgSrc,
	title,
	text,
	type,
}: TermsOfDeliveryCardProps) => {
	return (
		<div
			className={`${
				type % 2 == 0 ? 'bg-[#966E6E0D]' : ''
			} max-w-xs flex flex-col items-center justify-center text-center p-5 space-y-10 rounded-lg`}
		>
			<img
				src={imgSrc}
				alt='terms-of-delivery-1'
			/>
			<div className='space-y-4 pb-10'>
				<h2 className='font-bold text-xl'>
					{title}
				</h2>
				<p className='text-[#666666] text-md'>
					{text}
				</p>
			</div>
		</div>
	);
};

export default TermsOfDeliveryCard;
