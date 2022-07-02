import React, { useState } from 'react';

const SpentCafesInput = ({ setOnKeyPress, setAllDataButton }) => {
	const [spentCafes, setSpentCafes] = useState(0);

	return (
		<div className='input-block'>
			<input
				type='number'
				placeholder='Enter how much you have spent...'
				onKeyPress={e =>
					setOnKeyPress(
						e,
						setSpentCafes,
						'spentCafes',
						spentCafes,
						'Cafes and restaurants'
					)
				}
				onChange={e => setSpentCafes(+e.target.value)}
				inputMode='decimal'
			/>
			<button
				className='complete-btn'
				onClick={e =>
					setAllDataButton(
						e,
						setSpentCafes,
						'spentCafes',
						spentCafes,
						'Cafes and restaurants'
					)
				}>
				✓
			</button>
		</div>
	);
};

export default SpentCafesInput;
