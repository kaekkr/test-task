const HeroInfo = () => {
	return (
		<div className='text-right flex space-x-6'>
			<div className='space-y-6 mt-28'>
				<div className='space-y-2'>
					<h2 className='text-4xl font-bold uppercase'>
						19 лет
					</h2>
					<p className='max-w-[14rem]'>
						Завод был основан в 2004 году, с 2023
						года находится в собственности ТОО
						«QazExpoCentre»
					</p>
				</div>
				<div className='space-y-2'>
					<h2 className='text-4xl font-bold'>
						200 +
					</h2>
					<p className='max-w-[14rem]'>
						На предприятии работает около 200
						человек
					</p>
				</div>
				<div className='space-y-2'>
					<h2 className='text-4xl font-bold'>
						40 000 +
					</h2>
					<p className='max-w-[12rem]'>
						Мощность 40 тыс. тонн труб в год
					</p>
				</div>
			</div>
			<img src='/hero/hero-1.svg' alt='hero-1' className='mt-28'/>
		</div>
	);
};

export default HeroInfo;
