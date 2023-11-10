const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth', 
		});
	};

	return (
		<footer className='flex justify-between bg-black p-8'>
			<img src='/logo.svg' alt='logo' />
			<div className='flex items-center space-x-5'>
				<h3 className='text-[#848484]'>
					ABC DESIGN
				</h3>
				<img
					src='/footer/footer-1.svg'
					alt='footer-1'
				/>
				<h2 className='text-white font-bold'>
					ВЕРНУТЬСЯ НАВЕРХ
				</h2>
				<button onClick={scrollToTop}>
					<img
						src='/footer/footer-2.svg'
						alt='footer-2'
					/>
				</button>
			</div>
		</footer>
	);
};

export default Footer;
