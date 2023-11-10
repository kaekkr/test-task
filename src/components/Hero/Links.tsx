const links = [
	'О заводе',
	'Производственные мощности',
	'Продукция',
	'Технологическая схема',
	'Условия поставки',
	'Контакты',
];

const Links = () => {
	return (
		<ul className='flex space-x-4'>
			{links.map((link, i) => (
				<li key={i}>
					<a
						href={`#${link}`}
						className='text-lg cursor-pointer hover:underline'
					>
						{link}
					</a>
				</li>
			))}
		</ul>
	);
};

export default Links;
