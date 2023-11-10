import HeroInfo from './HeroInfo';
import HeroTitle from './HeroTitle';
import Navbar from './Navbar';

const Hero = () => {
	return (
		<section
			id='hero'
			className='bg-[url("/hero/hero-bg.svg")] h-[768px] text-white relative'
		>
			<Navbar />
			<div className='flex justify-between'>
				<HeroTitle />
				<HeroInfo />
			</div>
			<button className='flex items-center space-x-6 mt-2'>
				<img
					src='/hero/hero-2.svg'
					alt='hero-2'
				/>
				<p>ПОДРОБНЕЕ</p>
			</button>
			<button className='absolute bottom-4 right-4'>
				<img
					src='/hero/hero-3.svg'
					alt='hero-3'
				/>
			</button>
		</section>
	);
};

export default Hero;
