import React, { useState } from 'react';

const Input = ({ setOnKeyPress, setAllDataButton }) => {
	const [income, setIncome] = useState(0);

	return (
		<div className='input-block'>
			<input
				type='number'
				placeholder='Enter how much did you earn...'
				onKeyPress={e => setOnKeyPress(e, setIncome, 'totalBalance', income)}
				onChange={e => setIncome(+e.target.value)}
				inputMode='decimal'
			/>
			<button
				className='complete-btn'
				onClick={e => setAllDataButton(e, setIncome, 'totalBalance', income)}>
				✓
			</button>
		</div>
	);
};

export default Input;
