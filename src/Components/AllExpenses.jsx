import React, { useRef, useState, memo, useContext } from 'react';
import Day from './Day';
import Percent from './Percent';
import { CSSTransition } from 'react-transition-group';
import { DataContext } from '../Context';

const AllExpenses = () => {
	const [expenses, setExpenses] = useState(false);
	const nodeRef = useRef(null);
	const { allData } = useContext(DataContext);

	return (
		<>
			<div
				className={`expenses-toggle ${expenses ? 'toTop' : ''}`}
				onClick={() => setExpenses(!expenses)}>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M12 6.93936L3.93933 15L4.99999 16.0607L12 9.06068L19 16.0607L20.0606 15L12 6.93936Z'
						fill='white'
					/>
				</svg>
			</div>
			<CSSTransition
				in={expenses}
				timeout={500}
				classNames='expensesTR'
				unmountOnExit
				nodeRef={nodeRef}>
				<div className='expenses' ref={nodeRef}>
					
					<div className='expenses-block'>
						<Day />


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
									d='M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.7611 20.8796 17.2625 19.0711 19.0711C17.2625 20.8796 14.7611 22 12 22C6.47715 22 2 17.5228 2 12ZM11 4.06189C7.05369 4.55399 4 7.92038 4 12C4 16.4183 7.58172 20 12 20C13.8491 20 15.5506 19.3736 16.9057 18.3199L11 12.4142V4.06189ZM13 4.06189V11H19.9381C19.4869 7.38128 16.6187 4.51314 13 4.06189ZM19.9382 13H14.4142L18.3199 16.9057C19.1806 15.7988 19.7562 14.4608 19.9382 13Z'
									fill='white'
								/>
							</svg>
							Spent this month: {allData.spentThisMonth.toLocaleString().replaceAll(',', ' ')} 
							<span className='currency'>₴</span>
						</p>

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
									d='M2.25 21.75H21.75V20.25H19.75V6.25H14.25V20.25H11.75V11.25H6.25V20.25H3.75L3.75 2.25L2.25 2.25L2.25 21.75ZM7.75 20.25H10.25V12.75H7.75V20.25ZM18.25 7.75V20.25H15.75V7.75H18.25Z'
									fill='white'
								/>
							</svg>
							Total spent:
						</p>

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
							Groceries - {allData.spentGroceries.toLocaleString().replaceAll(',', ' ')}
							<span className='currency'>₴</span>
						</p>

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
							Cafes and restaurants - {allData.spentCafes.toLocaleString().replaceAll(',', ' ')}
							<span className='currency'>₴</span>
						</p>

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
							Entertainment - {allData.spentEntertainment.toLocaleString().replaceAll(',', ' ')}
							<span className='currency'>₴</span>
						</p>

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
							Other - {allData.spent.toLocaleString().replaceAll(',', ' ')}
							<span className='currency'>₴</span>
						</p>
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
								<path
									d='M17.75 14.375H15.75V16.375H17.75V14.375Z'
									fill='white'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M5.25 5.25H2.25V20.75H21.75V5.25H18.75V2H17.25V5.25H6.75V2H5.25V5.25ZM3.75 6.75V19.25H20.25V6.75H3.75Z'
									fill='white'
								/>
							</svg>
							Monthly payment
						</p>

						{allData.shouldPay.length > 0 ? (
							allData.shouldPay.map((payment, i) => (
								<p key={i} className='payment'>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M10.8622 16.0592L16.4107 10.5265L15.3515 9.46436L10.8622 13.9409L8.6485 11.7335L7.58936 12.7957L10.8622 16.0592Z'
											fill='white'
										/>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M2.25 5.25H5.25V2H6.75V5.25H17.25V2H18.75V5.25H21.75V20.75H2.25V5.25ZM3.75 19.25V6.75H20.25V19.25H3.75Z'
											fill='white'
										/>
									</svg>

									{payment}
									<span className='currency'>₴</span>
								</p>
							))
						) : (
							<p>Nothing in monthly payment</p>
						)}

						<p className='percent'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M2.25 21.75H21.75V20.25H19.75V6.25H14.25V20.25H11.75V11.25H6.25V20.25H3.75L3.75 2.25L2.25 2.25L2.25 21.75ZM7.75 20.25H10.25V12.75H7.75V20.25ZM18.25 7.75V20.25H15.75V7.75H18.25Z'
									fill='white'
								/>
							</svg>
							Total spent in percentages:
						</p>

						<Percent/>
					</div>
				</div>
			</CSSTransition>
		</>
	);
};
export default memo(AllExpenses);
