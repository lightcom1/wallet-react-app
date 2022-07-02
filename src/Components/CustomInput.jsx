import React, { useState } from 'react';

const CustomInput = ({ setOnKeyPress, setAllDataButton }) => {
	const [custom, setCustom] = useState('');

	return (
		<div className='input-block'>
			<input
				type='text'
				placeholder='For example type "Shoes 2000"'
				onKeyPress={e => setOnKeyPress(e, setCustom, 'custom', custom, '')}
				onChange={e => setCustom(e.target.value)}
			/>
			<button
				className='complete-btn'
				onClick={e => setAllDataButton(e, setCustom, 'custom', custom, '')}>
				✓
			</button>
		</div>
	);
};

export default CustomInput;
