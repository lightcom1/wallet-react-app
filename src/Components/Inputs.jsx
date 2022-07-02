import React, { memo, useContext } from 'react';
import Input from './Input';
import InvestedInput from './InvestedInput';
import ShouldPayInput from './ShouldPayInput';
import SpentCafesInput from './SpentCafesInput';
import SpentEntertainmentInput from './SpentEntertainmentInput';
import SpentGroceriesInput from './SpentGroceriesInput';
import SpentInput from './SpentInput';
import { DataContext } from '../Context';
import CustomInput from './CustomInput';

const Inputs = () => {
	let { setAllData } = useContext(DataContext);

	const date = new Date();
	let day = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${
		date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
	}`;

	const setInput = (param, value, operation) => {
		switch (param) {
			case 'totalBalance':
				setAllData(prev => ({
					...prev,
					totalBalance: prev.totalBalance + value,
				}));
				break;
			case 'invested':
				setAllData(prev => ({
					...prev,
					invested: (prev.invested += value),
					totalBalance: prev.totalBalance - value,
				}));
				break;
			case 'shouldPay':
				setAllData(prev => ({
					...prev,
					shouldPay: [...prev.shouldPay, value],
					totalBalance: prev.totalBalance - +value.replace(/[^.\d]/g, ''),
					spentThisMonth: (prev.spentThisMonth += +value.replace(
						/[^.\d]/g,
						''
					)),
				}));
				break;
			case 'custom':
				setAllData(prev => ({
					...prev,
					spent: (prev.spent += +value.replace(/[^.\d]/g, '')),
					totalBalance: prev.totalBalance - +value.replace(/[^.\d]/g, ''),
					spentThisMonth: (prev.spentThisMonth += +value.replace(
						/[^.\d]/g,
						''
					)),
					operationsHistory: {
						...prev.operationsHistory,
						[day]: [`${value}`, ...prev.operationsHistory[day]],
					},
				}));
				break;

			default:
				setAllData(prev => ({
					...prev,
					[param]: (prev[param] += value),
					spentThisMonth: (prev.spentThisMonth += value),
					totalBalance: prev.totalBalance - value,
					operationsHistory: {
						...prev.operationsHistory,
						[day]: [`${operation} - ${value}`, ...prev.operationsHistory[day]],
					},
				}));
				break;
		}
	};

	const setOnKeyPress = (e, clearState, param, value, operation) => {
		if (e.code === 'Enter') {
			if (e.target.value === '') {
				e.target.classList.add('invalid');

				setTimeout(() => {
					e.target.parentElement.children[0].classList.remove('invalid');
				}, 400);

				return;
			}

			e.target.classList.remove('invalid');

			setInput(param, value, operation);

			if (param === 'shouldPay') {
				clearState('');
			} else {
				clearState(0);
			}

			e.target.value = '';
		}
	};

	const setAllDataButton = (e, clearState, param, value, operation) => {
		if (e.target.parentElement.children[0].value === '') {
			e.target.parentElement.children[0].classList.add('invalid');

			setTimeout(() => {
				e.target.parentElement.children[0].classList.remove('invalid');
			}, 400);

			return;
		}

		e.target.parentElement.children[0].classList.remove('invalid');

		setInput(param, value, operation);

		if (param === 'shouldPay') {
			clearState('');
		} else {
			clearState(0);
		}

		e.target.parentElement.children[0].value = '';
	};

	return (
		<div className='inputs-wrapper'>
			<p>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M21.7578 6.02499L14.6893 6.02499V7.52499L19.1971 7.52499L12.9713 13.7508L8.94262 9.72214L1.93933 16.7254L2.99999 17.7861L8.94262 11.8435L12.9713 15.8721L20.249 8.59449V13.1023H21.749V7.52499H21.7578V6.02499Z'
						fill='white'
					/>
				</svg>
				Income
			</p>

			<Input
				setOnKeyPress={setOnKeyPress}
				setAllDataButton={setAllDataButton}
			/>

			<p>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M2.25 21.75L2.25 2.25L3.75 2.25L3.75 20.25H21.75V21.75H2.25Z'
						fill='white'
					/>
					<path
						d='M11.5078 8.44716L5.93933 14.0156L6.99999 15.0763L11.5078 10.5685L14.9602 14.0208L20.5286 8.45237L19.468 7.39171L14.9602 11.8995L11.5078 8.44716Z'
						fill='white'
					/>
				</svg>
				Invested
			</p>
			<InvestedInput
				setOnKeyPress={setOnKeyPress}
				setAllDataButton={setAllDataButton}
			/>

			<p>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M2 2.25H5.54057L6.54057 5.25H22.2731L16.4543 15.75H9.375L7.43018 18.3431C7.50702 18.471 7.5715 18.6072 7.62197 18.75H16.378C16.6869 17.8761 17.5203 17.25 18.5 17.25C19.7426 17.25 20.75 18.2574 20.75 19.5C20.75 20.7426 19.7426 21.75 18.5 21.75C17.5203 21.75 16.6869 21.1239 16.378 20.25H7.62197C7.31309 21.1239 6.47966 21.75 5.5 21.75C4.25736 21.75 3.25 20.7426 3.25 19.5C3.25 18.2574 4.25736 17.25 5.5 17.25C5.77153 17.25 6.03182 17.2981 6.27282 17.3862L8.16422 14.8644L4.45943 3.75H2V2.25ZM9.54057 14.25H15.5707L19.7269 6.75H7.04057L9.54057 14.25ZM18.5 18.75C18.0858 18.75 17.75 19.0858 17.75 19.5C17.75 19.9142 18.0858 20.25 18.5 20.25C18.9142 20.25 19.25 19.9142 19.25 19.5C19.25 19.0858 18.9142 18.75 18.5 18.75ZM4.75 19.5C4.75 19.0858 5.08579 18.75 5.5 18.75C5.91421 18.75 6.25 19.0858 6.25 19.5C6.25 19.9142 5.91421 20.25 5.5 20.25C5.08579 20.25 4.75 19.9142 4.75 19.5Z'
						fill='white'
					/>
				</svg>
				Groceries
			</p>
			<SpentGroceriesInput
				setOnKeyPress={setOnKeyPress}
				setAllDataButton={setAllDataButton}
			/>

			<p>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M16.75 5.25H2.25V12.5C2.25 16.5041 5.49594 19.75 9.5 19.75C12.3356 19.75 14.7909 18.1222 15.9825 15.75H21.75V7.25H16.75V5.25ZM16.75 8.75V14.25H20.25V8.75H16.75ZM15.25 6.75H3.75V12.5C3.75 15.6756 6.32436 18.25 9.5 18.25C12.6756 18.25 15.25 15.6756 15.25 12.5V6.75Z'
						fill='white'
					/>
				</svg>
				Cafes and restaurants
			</p>
			<SpentCafesInput
				setOnKeyPress={setOnKeyPress}
				setAllDataButton={setAllDataButton}
			/>

			<p>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M7.75 9.75H6.25V11.25H7.75V12.75H9.25V11.25H10.75V9.75H9.25V8.25H7.75V9.75Z'
						fill='white'
					/>
					<path
						d='M14.4393 8.37871L15.5 9.43936L16.5607 8.37866L17.6213 9.43932L16.5606 10.5L17.6213 11.5607L16.5607 12.6214L15.5 11.5607L14.4393 12.6213L13.3787 11.5606L14.4393 10.5L13.3787 9.43937L14.4393 8.37871Z'
						fill='white'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M12.75 4.25V2H11.25V4.25H2.25V20.75H6.93402L10.534 16.75H13.466L17.066 20.75H21.75V4.25H12.75ZM3.75 19.25V5.75H20.25V19.25H17.734L14.134 15.25H9.86598L6.26598 19.25H3.75Z'
						fill='white'
					/>
				</svg>
				Entertainment
			</p>
			<SpentEntertainmentInput
				setOnKeyPress={setOnKeyPress}
				setAllDataButton={setAllDataButton}
			/>

			<p>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M2.99999 6.21434L8.94262 12.157L12.9713 8.12829L20.249 15.406V10.8981H21.749V16.4755H21.7578V17.9755L14.6893 17.9755V16.4755L19.1971 16.4755L12.9713 10.2496L8.94262 14.2783L1.93933 7.275L2.99999 6.21434Z'
						fill='white'
					/>
				</svg>
				Other
			</p>
			<SpentInput
				setOnKeyPress={setOnKeyPress}
				setAllDataButton={setAllDataButton}
			/>

			<p>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M16.4496 2.24683L21.7529 7.55013L8.98213 20.3209H3.67883V15.0176L16.4496 2.24683ZM16.4496 4.36815L14.673 6.14475L17.855 9.32673L19.6316 7.55013L16.4496 4.36815ZM16.7944 10.3874L13.6124 7.20541L5.17883 15.639V18.8209H8.36081L16.7944 10.3874Z'
						fill='white'
					/>
				</svg>
				Custom
			</p>
			<CustomInput
				setOnKeyPress={setOnKeyPress}
				setAllDataButton={setAllDataButton}
			/>

			<p>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path d='M6.25 9.625H8.25V11.625H6.25V9.625Z' fill='white' />
					<path d='M8.25 14.375H6.25V16.375H8.25V14.375Z' fill='white' />
					<path d='M11 9.625H13V11.625H11V9.625Z' fill='white' />
					<path d='M13 14.375H11V16.375H13V14.375Z' fill='white' />
					<path d='M15.75 9.625H17.75V11.625H15.75V9.625Z' fill='white' />
					<path d='M17.75 14.375H15.75V16.375H17.75V14.375Z' fill='white' />
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M5.25 5.25H2.25V20.75H21.75V5.25H18.75V2H17.25V5.25H6.75V2H5.25V5.25ZM3.75 6.75V19.25H20.25V6.75H3.75Z'
						fill='white'
					/>
				</svg>
				Monthly payment
			</p>
			<ShouldPayInput
				setOnKeyPress={setOnKeyPress}
				setAllDataButton={setAllDataButton}
			/>
		</div>
	);
};

export default memo(Inputs);
