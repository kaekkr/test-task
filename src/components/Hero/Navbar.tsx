import LanguageChange from './LanguageChange';
import Links from './Links';

const Navbar = () => {
	return (
		<div className='flex items-center justify-between'>
			<img src='logo.svg' alt='logo' />
			<Links />
			<LanguageChange />
		</div>
	);
};

export default Navbar;
