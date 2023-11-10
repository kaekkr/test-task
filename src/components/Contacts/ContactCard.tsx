type ContactCardProps = {
	imgSrc: string;
	title: string;
	text: string;
};

const ContactCard = ({
	imgSrc,
	title,
	text,
}: ContactCardProps) => {
	return (
		<div className='border rounded-lg p-5 flex space-x-3 max-w-[24rem] items-center'>
			<img src={imgSrc} alt={imgSrc} />
			<img
				src='/contacts/contacts-4.svg'
				alt='contacts-4'
			/>
			<div className='space-y-2'>
				<h3 className='text-[#888888] uppercase'>{title}</h3>
				<p className=''>{text}</p>
			</div>
		</div>
	);
};

export default ContactCard;
