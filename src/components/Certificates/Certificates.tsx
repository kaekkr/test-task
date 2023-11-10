import Carousel from '../ui/Carousel';
import TitleRedLine from '../ui/TitleRedLine';

const imgsSrc = [
	'./certificates/certificates-1.svg',
	'./certificates/certificates-2.svg',
	'./certificates/certificates-3.svg',
	'./certificates/certificates-4.svg',
	'./certificates/certificates-5.svg',
];

const Certificates = () => {
	return (
		<section id='Сертификаты' className='space-y-10'>
			<TitleRedLine
				title='Сертификаты'
				subTitle='Соответствия
QazExpoCentre Pipe'
			/>
			<Carousel imgsSrc={imgsSrc} />
		</section>
	);
};

export default Certificates;
