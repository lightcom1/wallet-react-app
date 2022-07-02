import React, { useState } from 'react';

const InvestedInput = ({ setOnKeyPress, setAllDataButton }) => {
	const [invested, setInvested] = useState(0);

	return (
		<div className='input-block'>
			<input
				type='number'
				placeholder='Enter how much you have invested...'
				onKeyPress={e => setOnKeyPress(e, setInvested, 'invested', invested)}
				onChange={e => setInvested(+e.target.value)}
				inputMode='decimal'
			/>
			<button
				className='complete-btn'
				onClick={e => setAllDataButton(e, setInvested, 'invested', invested)}>
				✓
			</button>
		</div>
	);
};

export default InvestedInput;
