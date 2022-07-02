import React, { useState } from 'react';

const ShouldPayInput = ({ setOnKeyPress, setAllDataButton }) => {
	const [shouldPay, setShouldPay] = useState('');

	return (
		<div className='input-block'>
			<input
				type='text'
				placeholder='For example type "Rent 10000"'
				onKeyPress={e => setOnKeyPress(e, setShouldPay, 'shouldPay', shouldPay)}
				onChange={e => setShouldPay(e.target.value)}
			/>
			<button
				className='complete-btn'
				onClick={e =>
					setAllDataButton(e, setShouldPay, 'shouldPay', shouldPay)
				}>
				✓
			</button>
		</div>
	);
};

export default ShouldPayInput;
