import React, { useState } from 'react';

const SpentInput = ({ setOnKeyPress, setAllDataButton }) => {
	const [spent, setSpent] = useState(0);

	return (
		<div className='input-block'>
			<input
				type='number'
				placeholder='Enter how much you have spent...'
				onKeyPress={e => setOnKeyPress(e, setSpent, 'spent', spent, 'Other')}
				onChange={e => setSpent(+e.target.value)}
				inputMode='decimal'
			/>
			<button
				className='complete-btn'
				onClick={e => setAllDataButton(e, setSpent, 'spent', spent, 'Other')}>
				✓
			</button>
		</div>
	);
};

export default SpentInput;
