type TitleRedLineProps = {
	title: string;
	subTitle?: string;
	titleColor?: string;
};

const TitleRedLine = ({
	title,
	subTitle,
	titleColor,
}: TitleRedLineProps) => {
	return (
		<div className='flex space-x-4 items-center'>
			<img
				src='/title-line.svg'
				alt='title-line'
			/>
			<div className=''>
				<h1 className={`text-5xl ${titleColor} font-bold`}>
					{title}
				</h1>
				<h3 className='text-xl text-[#777777]'>
					{subTitle}
				</h3>
			</div>
		</div>
	);
};

export default TitleRedLine;
