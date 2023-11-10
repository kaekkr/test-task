import { useState } from 'react';
import TitleRedLine from '../ui/TitleRedLine';
import DropdownMenu from './DropdownMenu';

const ProductCatalogue = () => {
	const [dropdownMenu, setDropdownMenu] =
		useState(false);

	const toggleDropdownMenu = () => {
		setDropdownMenu(prev => !prev);
	};

	return (
		<section id='Продукция' className='space-y-5'>
			<TitleRedLine
				title='Каталог продукции'
				subTitle='Завода QazExpoCentre Pipe'
			/>
			<button
				onClick={toggleDropdownMenu}
				className={`${
					dropdownMenu
						? 'bg-red-500 text-white'
						: ''
				} font-bold text-2xl w-full border rounded-lg p-5 flex justify-between`}
			>
				<h2 className='font-bold text-2xl'>
					Обсадные трубы
				</h2>
				<h2 className='text-3xl'>
					{dropdownMenu ? '-' : '+'}
				</h2>
			</button>
			{dropdownMenu && <DropdownMenu />}
			<button
				className={` font-bold text-2xl w-full border rounded-lg p-5 flex justify-between`}
			>
				<h2 className='font-bold text-2xl'>
					Насосно-компрессорные трубы
				</h2>
				<h2 className='text-3xl'>{'+'}</h2>
			</button>
		</section>
	);
};

export default ProductCatalogue;
