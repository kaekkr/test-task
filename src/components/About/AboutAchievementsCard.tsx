type AboutAchievementsCardProps = {
	imgSrc: string;
	title: string;
	text: string;
};

const AboutAchievementsCard = ({
	imgSrc,
	title,
	text,
}: AboutAchievementsCardProps) => {
	return (
		<div className='border rounded-lg max-w-sm space-y-4 px-8 py-12 pb-32'>
			<img src={imgSrc} alt='about-1' />
			<h2 className='text-xl font-bold uppercase'>
				{title}
			</h2>
			<p className='text-md text-[#666666]'>{text}</p>
		</div>
	);
};

export default AboutAchievementsCard;
