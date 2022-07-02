import React, { useState } from 'react';

const SpentGroceriesInput = ({ setOnKeyPress, setAllDataButton }) => {
	const [spentGroceries, setSpentGroceries] = useState(0);

	return (
		<div className='input-block'>
			<input
				type='number'
				placeholder='Enter how much you have spent...'
				onKeyPress={e =>
					setOnKeyPress(
						e,
						setSpentGroceries,
						'spentGroceries',
						spentGroceries,
						'Groceries'
					)
				}
				onChange={e => setSpentGroceries(+e.target.value)}
				inputMode='decimal'
			/>
			<button
				className='complete-btn'
				onClick={e =>
					setAllDataButton(
						e,
						setSpentGroceries,
						'spentGroceries',
						spentGroceries,
						'Groceries'
					)
				}>
				✓
			</button>
		</div>
	);
};

export default SpentGroceriesInput;
