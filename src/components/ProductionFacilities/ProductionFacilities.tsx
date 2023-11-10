import TitleRedLine from '../ui/TitleRedLine';

const ProductionFacilities = () => {
	return (
		<section
			id='Производственные мощности'
			className='flex justify-between'
		>
			<img
				src='./production-facilities/production-facilities-1.svg'
				alt='production-facilities-1'
			/>
			<div className='space-y-4'>
				<TitleRedLine title='Производственные мощности'/>
				<div className='pl-12 space-y-4'>
					<div className='flex space-x-4 max-w-2xl items-start'>
						<img
							src='/production-facilities/production-facilities-2.svg'
							alt='production-facilities-2'
							className='pt-1'
						/>
						<p className='text-[#666666]'>
							Предприятие оснащено современным
							технологическим и контрольным
							оборудованием для производства
							насосно-компрессорных и обсадных
							труб диаметром от 60 мм до 178 мм.
						</p>
					</div>
					<div className='flex space-x-4 max-w-3xl items-start'>
						<img
							src='/production-facilities/production-facilities-2.svg'
							alt='production-facilities-2'
							className='pt-1'
						/>
						<div className='text-[#666666] space-y-2'>
							<p>
								Основное производственное
								оборудование завода изготовлено в
								Германии: EMAG Maschinenfabrik,
								Weatherford oil Tool, Hydroline
								Schrupp, Venjakob –Maschienbau
							</p>
							<p className='max-w-xl'>
								ТОО «QazExpoCentre-Pipe» состоит в
								Реестре отечественных производителей
								Казахстана, получив Индустриальный
								сертификат 1-й категории № 109 3
								00020. Включено в Реестр
								товаропроизводителей Холдинга
								«Самрук-Қазына».
								«QazExpoCentre-Pipe» имеет
								действующие сертификаты о
								происхождении товара СТ KZ
							</p>
						</div>
					</div>
					<div className='flex space-x-4 max-w-[40rem] items-start'>
						<img
							src='/production-facilities/production-facilities-2.svg'
							alt='production-facilities-2'
							className='pt-1'
						/>
						<p className='text-[#666666]'>
							Серийное производство
							насосно-компрессорных и обсадных
							труб соответствует ГОСТ 633-80, ГОСТ
							632-80, ГОСТ 31446-2017 (ISO
							11960:2014), СТ РК ИСО 11960-2009,
							API Spec 5CTF
						</p>
					</div>
					<div className='flex space-x-4 max-w-[40rem] items-start'>
						<img
							src='/production-facilities/production-facilities-2.svg'
							alt='production-facilities-2'
							className='pt-1'
						/>
						<p className='text-[#666666]'>
							QazExpoCentre-Pipe является
							лицензиатом на право нанесения
							монограммы API (API Monogram) на
							выпускаемую продукцию
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductionFacilities;
