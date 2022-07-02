import React, { memo, useContext } from 'react';
import { DataContext } from '../Context';

const Percent = () => {
	const {
		allData: { spent, spentGroceries, spentCafes, spentEntertainment },
	} = useContext(DataContext);

	let totalSpent = spent + spentGroceries + spentCafes + spentEntertainment;

	let spentGroceriesPercent = +((spentGroceries / totalSpent) * 100).toFixed(1);
	let spentCafesPercent = +((spentCafes / totalSpent) * 100).toFixed(1);
	let spentEntertainmentPercent = +(
		(spentEntertainment / totalSpent) *
		100
	).toFixed(1);
	let spentPercent = +((spent / totalSpent) * 100).toFixed(1);

	let gradient = `conic-gradient(
		#4E9F3Dc5 ${spentGroceriesPercent * 3.6}deg, 
		#FFA069c5 ${spentGroceriesPercent * 3.6}deg ${
		spentGroceriesPercent * 3.6 + spentCafesPercent * 3.6
	}deg,
	#DA2D2Dc5 ${spentGroceriesPercent * 3.6 + spentCafesPercent * 3.6}deg  
	${
		spentGroceriesPercent * 3.6 +
		spentCafesPercent * 3.6 +
		spentEntertainmentPercent * 3.6
	}deg,
	#393E46c5 ${
		spentGroceriesPercent * 3.6 +
		spentCafesPercent * 3.6 +
		spentEntertainmentPercent * 3.6
	}deg 360deg)`;

	return (
		<>
			<div className='percents'>
				<span>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M2 2.25H5.54057L6.54057 5.25H22.2731L16.4543 15.75H9.375L7.43018 18.3431C7.50702 18.471 7.5715 18.6072 7.62197 18.75H16.378C16.6869 17.8761 17.5203 17.25 18.5 17.25C19.7426 17.25 20.75 18.2574 20.75 19.5C20.75 20.7426 19.7426 21.75 18.5 21.75C17.5203 21.75 16.6869 21.1239 16.378 20.25H7.62197C7.31309 21.1239 6.47966 21.75 5.5 21.75C4.25736 21.75 3.25 20.7426 3.25 19.5C3.25 18.2574 4.25736 17.25 5.5 17.25C5.77153 17.25 6.03182 17.2981 6.27282 17.3862L8.16422 14.8644L4.45943 3.75H2V2.25ZM9.54057 14.25H15.5707L19.7269 6.75H7.04057L9.54057 14.25ZM18.5 18.75C18.0858 18.75 17.75 19.0858 17.75 19.5C17.75 19.9142 18.0858 20.25 18.5 20.25C18.9142 20.25 19.25 19.9142 19.25 19.5C19.25 19.0858 18.9142 18.75 18.5 18.75ZM4.75 19.5C4.75 19.0858 5.08579 18.75 5.5 18.75C5.91421 18.75 6.25 19.0858 6.25 19.5C6.25 19.9142 5.91421 20.25 5.5 20.25C5.08579 20.25 4.75 19.9142 4.75 19.5Z'
							fill='#4E9F3Dc5'
						/>
					</svg>
					{spentGroceriesPercent || '0.00'}%
				</span>
				<span>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M16.75 5.25H2.25V12.5C2.25 16.5041 5.49594 19.75 9.5 19.75C12.3356 19.75 14.7909 18.1222 15.9825 15.75H21.75V7.25H16.75V5.25ZM16.75 8.75V14.25H20.25V8.75H16.75ZM15.25 6.75H3.75V12.5C3.75 15.6756 6.32436 18.25 9.5 18.25C12.6756 18.25 15.25 15.6756 15.25 12.5V6.75Z'
							fill='#FFA069c5'
						/>
					</svg>
					{spentCafesPercent || '0.00'}%
				</span>
				<span>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M7.75 9.75H6.25V11.25H7.75V12.75H9.25V11.25H10.75V9.75H9.25V8.25H7.75V9.75Z'
							fill='#DA2D2Dc5'
						/>
						<path
							d='M14.4393 8.37871L15.5 9.43936L16.5607 8.37866L17.6213 9.43932L16.5606 10.5L17.6213 11.5607L16.5607 12.6214L15.5 11.5607L14.4393 12.6213L13.3787 11.5606L14.4393 10.5L13.3787 9.43937L14.4393 8.37871Z'
							fill='#DA2D2Dc5'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M12.75 4.25V2H11.25V4.25H2.25V20.75H6.93402L10.534 16.75H13.466L17.066 20.75H21.75V4.25H12.75ZM3.75 19.25V5.75H20.25V19.25H17.734L14.134 15.25H9.86598L6.26598 19.25H3.75Z'
							fill='#DA2D2Dc5'
						/>
					</svg>
					{spentEntertainmentPercent || '0.00'}%
				</span>
				<span>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M2.99999 6.21434L8.94262 12.157L12.9713 8.12829L20.249 15.406V10.8981H21.749V16.4755H21.7578V17.9755L14.6893 17.9755V16.4755L19.1971 16.4755L12.9713 10.2496L8.94262 14.2783L1.93933 7.275L2.99999 6.21434Z'
							fill='#56585c'
						/>
					</svg>
					{spentPercent || '0.00'}%
				</span>
			</div>
			<div
				className='chart'
				style={{
					background: gradient,
				}}></div>
		</>
	);
};

export default memo(Percent);
