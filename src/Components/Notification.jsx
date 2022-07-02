import React from 'react';

const Notification = ({
	setNotification,
	notification,
	option,
	setAllData,
	refs,
}) => {
	const date = new Date();
	let day = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${
		date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
	}`;

	const clearData = () => {
		switch (option) {
			case 'all':
				setAllData({
					totalBalance: 0,
					invested: 0,
					totalBalanceUsd: 0,
					investedUsd: 0,
					spent: 0,
					spentGroceries: 0,
					spentCafes: 0,
					spentEntertainment: 0,
					spentThisMonth: 0,
					shouldPay: [],
					operationsHistory: {
						[day]: [],
					},
				});
				break;
			case 'history':
				setAllData(prev => ({
					...prev,
					operationsHistory: {
						[day]: [],
					},
				}));
				break;
			case 'spents':
				setAllData(prev => ({
					...prev,
					spent: 0,
					spentGroceries: 0,
					spentCafes: 0,
					spentEntertainment: 0,
					spentThisMonth: 0,
					shouldPay: [],
				}));
				break;
			default:
				break;
		}

		setNotification(!notification);
	};

	return (
		<div className='notification' ref={refs}>
			<div className='wrapper'>
				<p>You sure?</p>
				<div className='notification-btns'>
					<button
						onClick={() => {
							setNotification(!notification);
						}}>
						No
					</button>
					<button onClick={() => clearData()}>Yes</button>
				</div>
			</div>
		</div>
	);
};

export default Notification;
