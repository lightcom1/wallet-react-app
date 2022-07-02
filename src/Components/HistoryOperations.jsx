import React, { useRef, useState, memo, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { DataContext } from '../Context';
import { v4 as uuid } from 'uuid';

const HistoryOperations = () => {
	const [modal, setModal] = useState(false);
	const nodeRef = useRef(null);
	const { allData } = useContext(DataContext);

	const sums = [];
	const spents = Object.values(allData.operationsHistory).reverse();

	spents.forEach(operation => {
		sums.push(
			operation.reduce((sum, curr) => sum + +curr.replace(/[^.\d]/g, ''), 0)
		);
	});

	return (
		<div className='history'>
			<div className='history-btn' onClick={() => setModal(!modal)}>
				<svg
					width='30'
					height='30'
					viewBox='0 0 30 30'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M8.58076 8.60294C10.2227 6.9554 12.4916 5.9375 15 5.9375C20.0051 5.9375 24.0625 9.99492 24.0625 15C24.0625 20.0051 20.0051 24.0625 15 24.0625C9.99492 24.0625 5.9375 20.0051 5.9375 15C5.9375 14.4822 5.51777 14.0625 5 14.0625C4.48223 14.0625 4.0625 14.4822 4.0625 15C4.0625 21.0406 8.95939 25.9375 15 25.9375C21.0406 25.9375 25.9375 21.0406 25.9375 15C25.9375 8.95939 21.0406 4.0625 15 4.0625C11.9731 4.0625 9.23197 5.29328 7.25266 7.2794C7.22085 7.31132 7.19182 7.34496 7.16556 7.38002L5.5936 5.80806C5.42212 5.63658 5.16692 5.57977 4.93889 5.66233C4.71086 5.74489 4.55118 5.9519 4.52922 6.19341L4.08728 11.0548C4.07049 11.2395 4.13661 11.4221 4.26777 11.5533C4.39893 11.6845 4.58157 11.7506 4.7663 11.7338L9.62766 11.2918C9.86917 11.2699 10.0762 11.1102 10.1587 10.8822C10.2413 10.6542 10.1845 10.399 10.013 10.2275L8.47787 8.69233C8.51377 8.66544 8.54817 8.63565 8.58076 8.60294Z'
						fill='white'
					/>
					<path
						d='M15.9375 8.75C15.9375 8.23223 15.5178 7.8125 15 7.8125C14.4822 7.8125 14.0625 8.23223 14.0625 8.75V15C14.0625 15.3232 14.229 15.6237 14.5031 15.795L18.2531 18.1387C18.6922 18.4132 19.2706 18.2797 19.545 17.8406C19.8194 17.4016 19.6859 16.8232 19.2469 16.5488L15.9375 14.4804V8.75Z'
						fill='white'
					/>
				</svg>
				History
			</div>
			<CSSTransition
				in={modal}
				timeout={1000}
				classNames='modalInfo'
				unmountOnExit
				nodeRef={nodeRef}>
				<div className='modal-history' ref={nodeRef}>
					<div className='close' onClick={() => setModal(!modal)}>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M12 10.9394L5.63604 4.57539L4.57538 5.63605L10.9393 12L4.57538 18.364L5.63604 19.4246L12 13.0607L18.364 19.4246L19.4246 18.364L13.0607 12L19.4246 5.63605L18.364 4.57539L12 10.9394Z'
								fill='white'
							/>
						</svg>
					</div>

					<div className='history-block'>
						{Object.values(allData.operationsHistory)[0].length === 0 &&
						Object.keys(allData.operationsHistory).length === 1 ? (
							<p className='history-block--empty'>History is empty</p>
						) : (
							Object.values(allData.operationsHistory)
								.reverse()
								.map((operation, mi) =>
									operation.map((o, i) =>
										i === 0 ? (
											<span
												key={uuid()}
												style={{ marginTop: 15, display: 'block' }}>
												<span className='day'>
													{Object.keys(allData.operationsHistory).reverse()[mi]}{' '}
													- {sums[mi].toLocaleString().replaceAll(',', ' ')}{' '}
													<span className='currency'>₴</span>
												</span>
												<p className='operation'>
													{o} <span className='currency'>₴</span>
												</p>
											</span>
										) : (
											<p
												key={uuid()}
												className='operation'>
												{o} <span className='currency'>₴</span>
											</p>
										)
									)
								)
						)}
					</div>
				</div>
			</CSSTransition>
		</div>
	);
};

export default memo(HistoryOperations);
