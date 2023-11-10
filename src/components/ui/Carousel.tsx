import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 2,
};

type CarouselProps = {
	imgsSrc: string[];
};

const Carousel = ({ imgsSrc }: CarouselProps) => {
	return (
		<Slider {...settings}>
			{imgsSrc.map((imgSrc, i) => (
				<div key={i}>
					<img src={imgSrc} alt={imgSrc} />
				</div>
			))}
		</Slider>
	);
};

export default Carousel;
