import React, { memo, useContext } from 'react';
import './Components.scss';
import { DataContext } from '../Context';

const TotalCard = () => {
	const { allData } = useContext(DataContext);

	return (
		<div className='main-card'>
			<div className='total'>
				<p>Balance</p>
				<span className='total-balance-usd'>
					<span className='currency'>$</span>{' '}
					{allData.totalBalanceUsd
						.toLocaleString('en-US', {
							maximumFractionDigits: 1,
							currency: 'USD',
						})
						.replaceAll(',', ' ')}
				</span>
				<span className='total-balance-uah'>
					<span className='currency'>₴</span>{' '}
					{allData.totalBalance.toLocaleString().replaceAll(',', ' ')}
				</span>
			</div>

			<div className='invested'>
				<p>Invested</p>
				<span className='invested-balance-usd'>
					<span className='currency'>$</span>{' '}
					{allData.investedUsd
						.toLocaleString('en-US', {
							maximumFractionDigits: 1,
							currency: 'USD',
						})
						.replaceAll(',', ' ')}
				</span>
				<span className='invested-balance-uah'>
					<span className='currency'>₴</span>{' '}
					{allData.invested.toLocaleString().replaceAll(',', ' ')}
				</span>
			</div>
		</div>
	);
};
export default memo(TotalCard);
