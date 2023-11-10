import TermsOfDeliveryCard from './TermsOfDeliveryCard';
import TitleRedLine from '../ui/TitleRedLine';

const cards = [
	{
		imgSrc:
			'/terms-of-delivery/terms-of-delivery-1.svg',
		title: 'ГЕОГРАФИЯ',
		text: 'Трубная продукция поставляется в любую точку Казахстана и стран СНГ на условиях DDP до склада потребителя железнодорожным либо автомобильным транспортом.',
	},
	{
		imgSrc:
			'/terms-of-delivery/terms-of-delivery-1.svg',
		title: 'ПОТРЕБИТЕЛИ',
		text: 'Потребителями QazExpoCentre-Pipe выступают крупные нефтегазовые и сервисные компании Казахстана.',
	},
	{
		imgSrc:
			'/terms-of-delivery/terms-of-delivery-1.svg',
		title: 'СОПРОВОЖДЕНИЕ',
		text: 'Для потребителей в нефтегазовой отрасли при необходимости осуществляем инженерное сопровождение свинчивания и спуска обсадных колонн и насосно-компрессорных труб в скважины.',
	},
	{
		imgSrc:
			'/terms-of-delivery/terms-of-delivery-2.svg',
		title: 'ПЕРСОНАЛЬНЫЕ УСЛОВИЯ',
		text: 'QazExpoCentre-Pipe – клиентоориентированная компания, поэтому предлагаем индивидуальные условия поставки, в том числе учитывающие пожелания потребителей по срокам и формам оплаты.',
	},
];

const TermsOfDelivery = () => {
	return (
		<section
			id='Условия поставки'
			className='space-y-10'
		>
			<TitleRedLine
				title='Условия поставки '
				subTitle='трубной продукции
QazExpoCentre Pipe'
			/>
			<div className='flex justify-between'>
				{cards.map(
					({ imgSrc, title, text }, i) => (
						<TermsOfDeliveryCard
							key={i}
							imgSrc={imgSrc}
							title={title}
							text={text}
							type={i}
						/>
					)
				)}
			</div>
		</section>
	);
};

export default TermsOfDelivery;
