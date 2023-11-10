import AboutAchievementsCard from './AboutAchievementsCard';

const aboutAchievementsCards = [
	{
		imgSrc: '/about/about-1.svg',
		title: 'соответствие стандартам',
		text: 'Продукция соответствует казахстанским и международным стандартам, что подтверждается сертификатами',
	},
	{
		imgSrc: '/about/about-2.svg',
		title: 'полная сертификация',
		text: 'Предприятие сертифицировано по международным стандартам: ISO 9001, СТ РК ISO 9001, API Spec Q1, СТ РК ISO 14001, СТ РК ISO 45001',
	},
	{
		imgSrc: '/about/about-3.svg',
		title: 'награды и премии',
		text: 'ТОО «QazExpoCentre-Pipe» является победителем премии «Алтын сапа»-2022» в номинации «Лучшее предприятие производственного назначения»',
	},
];

const AboutAchievements = () => {
	return (
		<div className='flex justify-between mt-10 items-center'>
			{aboutAchievementsCards.map(
				({ imgSrc, title, text }, i) => (
					<AboutAchievementsCard
						key={i}
						imgSrc={imgSrc}
						title={title}
						text={text}
					/>
				)
			)}
		</div>
	);
};

export default AboutAchievements;
