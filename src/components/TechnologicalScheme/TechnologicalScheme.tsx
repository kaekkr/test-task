import Carousel from '../ui/Carousel';
import TitleRedLine from '../ui/TitleRedLine';

const imgsSrc = [
	'/technological-scheme/technological-scheme-1.svg',
	'/technological-scheme/technological-scheme-2.svg',
	'/technological-scheme/technological-scheme-3.svg',
	'/technological-scheme/technological-scheme-4.svg',
];

const TechnologicalScheme = () => {
	return (
		<section id='Технологическая схема' className='space-y-10'>
			<TitleRedLine
				title='Технологическая схема'
				subTitle='производства труб
QazExpoCentre Pipe'
			/>
			<Carousel imgsSrc={imgsSrc} />
		</section>
	);
};

export default TechnologicalScheme;
