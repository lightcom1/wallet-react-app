import React, {memo} from 'react';

const Day = () => {
	const date = new Date();
	const day = date.getDate();

	const weekDay = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	][date.getDay()];

	const month = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	][date.getMonth()];

	const enOrdinalRules = new Intl.PluralRules('en', {
		type: 'ordinal',
	});

	const enOrdinalRulesMap = {
		one: 'st',
		two: 'nd',
		few: 'rd',
		other: 'th',
	};

	const enOrdinalSuffix = enOrdinalRulesMap[enOrdinalRules.select(day)];

	return (
		<div className='date'>
			<p>{`${weekDay} ${day}${enOrdinalSuffix} ${month}`}</p>
		</div>
	);
};

export default memo(Day);
