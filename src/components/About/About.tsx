import TitleRedLine from '../ui/TitleRedLine';
import AboutAchievements from './AboutAchievements';

const About = () => {
	return (
		<section id='О заводе'>
			<div className='flex justify-between items-start'>
				<TitleRedLine
					title='О компании'
					subTitle='QazExpoCentre Pipe'
				/>
				<div className='space-y-3'>
					<h3 className='text-xl text-[#777777] max-w-[46rem]'>
						ТОО «QazExpoCentre-Pipe» – современное
						предприятие по производству стальных
						бесшовных обсадных и
						насосно-компрессорных труб, г.
						Уральск, Республика Казахстан.
					</h3>
					<h3 className='text-xl text-[#777777] max-w-[46rem]'>
						Продукция завода ориентирована на
						нефтегазовую отрасль и предназначена
						для использования при бурении,
						строительстве, эксплуатации и ремонте
						нефтяных и газовых скважин.
					</h3>
				</div>
			</div>
			<AboutAchievements />
		</section>
	);
};

export default About;
