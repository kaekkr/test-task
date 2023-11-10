const DropdownMenu = () => {
	return (
		<div className='border rounded-lg p-5'>
			<div className='grid grid-rows-3 grid-cols-4 gap-4'>
				<h3 className='font-bold bg-[#EAEAEA] p-5 rounded-tl-lg h-32'>
					Наименование нормативно-тех. документа
				</h3>
				<div className='grid grid-cols-3 grid-rows-2 bg-[#EAEAEA] h-32 p-5'>
					<h3 className='font-bold col-start-2 col-end-4'>
						Размеры
					</h3>
					<h3>Наружный диаметр, мм</h3>
					<h3>Толщина стенки, мм</h3>
					<h3>Длина, м</h3>
				</div>
				<h3 className='font-bold bg-[#EAEAEA] h-32 p-5'>
					Группа прочности
				</h3>
				<h3 className='font-bold bg-[#EAEAEA] h-32 p-5 rounded-tr-lg'>
					Тип резьбового соединения
				</h3>
				<p className='text-[#666666]'>
					API Spec. 5 CT (10 ver.) Steel pipes for
					use as casing or tubing for wells (Трубы
					обсадные и НКТ)
				</p>
				<div className='flex'>
					<div className='grid grid-rows-5 grid-cols-2'>
						<p className='text-[#666666]'>114,3</p>
						<p className='text-[#666666]'>7,4; 8,6; 10,2</p>
						<p className='text-[#666666]'>114,3</p>
						<p className='text-[#666666]'>7,4; 8,6; 10,2</p>
						<p className='text-[#666666]'>114,3</p>
						<p className='text-[#666666]'>7,4; 8,6; 10,2</p>
						<p className='text-[#666666]'>114,3</p>
						<p className='text-[#666666]'>7,4; 8,6; 10,2</p>
						<p className='text-[#666666]'>114,3</p>
						<p className='text-[#666666]'>7,4; 8,6; 10,2</p>
					</div>
					<p className='text-[#666666]'>
						От 9,5 до 12,0. Количество труб короче
						9,5 по нормам ГОСТ 632-80
					</p>
				</div>
				<p className='text-[#666666]'>
					J55; K55; L80 type 1; N80 type Q, R95;
					C90; T95; 10; P110
				</p>
				<p className='text-[#666666]'>
					S – короткая закругленная;  L удлиненная
					закругленная; BC – упорная «Батресс» ;
					TMK UP CS; TMK UP F; TMK UP PF; TMK UP
					PF ET
				</p>
				<p className='text-[#666666]'>
					API Spec. 5 CT (10 ver.) Steel pipes for
					use as casing or tubing for wells (Трубы
					обсадные и НКТ)
				</p>
				<div className='flex'>
					<div className='grid grid-rows-5 grid-cols-2'>
						<p className='text-[#666666]'>114,3</p>
						<p className='text-[#666666]'>7,4; 8,6; 10,2</p>
						<p className='text-[#666666]'>114,3</p>
						<p className='text-[#666666]'>7,4; 8,6; 10,2</p>
						<p className='text-[#666666]'>114,3</p>
						<p className='text-[#666666]'>7,4; 8,6; 10,2</p>
						<p className='text-[#666666]'>114,3</p>
						<p className='text-[#666666]'>7,4; 8,6; 10,2</p>
						<p className='text-[#666666]'>114,3</p>
						<p className='text-[#666666]'>7,4; 8,6; 10,2</p>
					</div>
					<p className='text-[#666666] max-w-xs'>
						От 9,5 до 12,0. Количество труб короче
						9,5 по нормам ГОСТ 632-80
					</p>
				</div>
				<p className='text-[#666666]'>
					J55; K55; L80 type 1; N80 type Q, R95;
					C90; T95; 10; P110
				</p>
				<p className='text-[#666666]'>
					S – короткая закругленная;  L удлиненная
					закругленная; BC – упорная «Батресс» ;
					TMK UP CS; TMK UP F; TMK UP PF; TMK UP
					PF ET
				</p>
			</div>
		</div>
	);
};

export default DropdownMenu;
