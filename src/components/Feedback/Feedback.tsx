import TitleRedLine from '../ui/TitleRedLine';
import FeedbackForm from './FeedbackForm';

const Feedback = () => {
	return (
		<section
			id='Обратная связь'
			className='bg-[url("/feedback/feedback-bg.svg")] h-[600px] py-28 space-y-5'
		>
			<TitleRedLine title='Обратная связь' titleColor='text-white'/>
			<p className='text-[#D7D7D7] max-w-md'>
				Уважаемые посетители, если у вас есть
				вопросы по поводу нашего производства или
				сотрудничества с нами, вы можете оставить
				заявку по форму ниже.
			</p>
      <FeedbackForm />
		</section>
	);
};

export default Feedback;
