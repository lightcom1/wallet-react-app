import React, { useState } from 'react';

const SpentEntertainmentInput = ({ setOnKeyPress, setAllDataButton }) => {
	const [spentEntertainment, setSpentEntertainment] = useState(0);

	return (
		<div className='input-block'>
			<input
				type='number'
				placeholder='Enter how much you have spent...'
				onKeyPress={e =>
					setOnKeyPress(
						e,
						setSpentEntertainment,
						'spentEntertainment',
						spentEntertainment,
						'Entertainment'
					)
				}
				onChange={e => setSpentEntertainment(+e.target.value)}
				inputMode='decimal'
			/>
			<button
				className='complete-btn'
				onClick={e =>
					setAllDataButton(
						e,
						setSpentEntertainment,
						'spentEntertainment',
						spentEntertainment,
						'Entertainment'
					)
				}>
				✓
			</button>
		</div>
	);
};

export default SpentEntertainmentInput;
