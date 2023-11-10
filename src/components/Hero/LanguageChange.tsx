import { useState } from 'react';

const languages = ['KZ', 'RU', 'EN'];

const LanguageChange = () => {
	const [selectedLanguage, setSelectedLanguage] =
		useState('RU');

	const changeLanguage = (language: string) => {
		setSelectedLanguage(language);
	};

	return (
		<div className='space-x-2 flex'>
			{languages.map((language, i) => (
				<div key={i}>
					<button
						onClick={() => changeLanguage(language)}
						className={`${
							selectedLanguage === language
								? 'underline'
								: ''
						} text-lg`}
					>
						{language}
					</button>
					<>
						{i !== languages.length - 1
							? ' /'
							: ''}
					</>
				</div>
			))}
		</div>
	);
};

export default LanguageChange;
