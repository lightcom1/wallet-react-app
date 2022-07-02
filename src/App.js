import { memo, useEffect, useState, useMemo } from 'react';
import './App.css';
import AllExpenses from './Components/AllExpenses';
import Info from './Components/Info';
import Inputs from './Components/Inputs';
import TotalCard from './Components/TotalCard';
import './Components/Components.scss';
import { DataContext } from './Context';
import HistoryOperations from './Components/HistoryOperations';
import Settings from './Components/Settings';

const App = () => {
	const date = new Date();
	let day = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${
		date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
	}`;

	const [allData, setAllData] = useState({
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

	const ProviderData = useMemo(
		() => ({ allData, setAllData }),
		[allData, setAllData]
	);

	const [exchangeRate, setExchangeRate] = useState(0);

	useEffect(() => {
		const today = date.getDate();

		const myLists = localStorage.getItem('allData');

		const storedData = JSON.parse(myLists);

		if (myLists) {
			if (storedData.operationsHistory[day]) {
				setAllData(storedData);
			} else {
				setAllData(() => ({
					...storedData,
					operationsHistory: {
						...storedData.operationsHistory,
						[day]: [],
					},
				}));
			}
		}
		const storedRate = localStorage.getItem('exchangeRate')?.split(' ')[0];
		const storedDay = localStorage.getItem('exchangeRate')?.split(' ')[1];

		const getExchangeRates = async () => {
			try {
				const response = await fetch(
					`https://api.currencyapi.com/v3/latest?apikey=${process.env.REACT_APP_EXCHANGE_RATE_API_KEY}&base_currency=UAH`
				);
				const json = await response.json();
				const { USD } = json.data;

				localStorage.setItem('exchangeRate', `${USD.value} ${today}`);

				setExchangeRate(USD.value);
			} catch (error) {
				setExchangeRate(storedRate || 0.034);
			}
		};

		if (storedDay && storedRate) {
			if (+storedDay !== today) {
				getExchangeRates();
			} else {
				setExchangeRate(storedRate);
			}
		} else {
			getExchangeRates();
		}

		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		localStorage.setItem('allData', JSON.stringify(allData));
	}, [allData]);

	const convertInvestedToUsd = () => {
		setAllData(prev => ({
			...prev,
			investedUsd: +(exchangeRate * allData.invested).toFixed(2),
		}));
	};

	useEffect(() => {
		convertInvestedToUsd();

		// eslint-disable-next-line
	}, [allData.invested, exchangeRate]);

	const convertBalanceToUsd = () => {
		setAllData(prev => ({
			...prev,
			totalBalanceUsd: +(exchangeRate * allData.totalBalance).toFixed(2),
		}));
	};

	useEffect(() => {
		convertBalanceToUsd();

		// eslint-disable-next-line
	}, [allData.totalBalance, exchangeRate]);

	return (
		<div className='App'>
			<Info />

			<DataContext.Provider value={ProviderData}>
				<TotalCard />
				<div className='buttons'>
					<Settings />
					<HistoryOperations />
				</div>

				<Inputs />

				<AllExpenses />
			</DataContext.Provider>
		</div>
	);
};

export default memo(App);
