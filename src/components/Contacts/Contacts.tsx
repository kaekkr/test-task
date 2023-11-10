import ContactCard from './ContactCard';

const contacts = [
	{
		imgSrc: '/contacts/contacts-1.svg',
		title: 'Адрес:',
		text: 'Республика Казахстан, 090005, ЗКО, г. Уральск, ул.Ружейникова, стр.11А',
	},
	{
		imgSrc: '/contacts/contacts-2.svg',
		title: 'Телефон:',
		text: '+7 (7172) 24-06-09',
	},
	{
		imgSrc: '/contacts/contacts-3.svg',
		title: 'Email:',
		text: 'info@qazexpopipe.com',
	},
];

const Contacts = () => {
	return (
		<section id='Контакты' className='space-y-10'>
			<div className='flex justify-between'>
				{contacts.map(
					({ imgSrc, title, text }, i) => (
						<ContactCard
							key={i}
							imgSrc={imgSrc}
							title={title}
							text={text}
						/>
					)
				)}
			</div>
			<img
				src='/contacts/contacts-5.svg'
				alt='contacts-5'
        className='w-full'
			/>
		</section>
	);
};

export default Contacts;
