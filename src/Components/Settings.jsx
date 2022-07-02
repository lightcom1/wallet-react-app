import React, { useRef, useState, memo, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { DataContext } from '../Context';
import Notification from './Notification';

const Settings = () => {
	const [modal, setModal] = useState(false);
	const [notification, setNotification] = useState(false);
	const nodeRef = useRef(null);
	const notifRef = useRef(null);
	const { setAllData } = useContext(DataContext);
	const [option, setOption] = useState('');

	const clearData = option => {
		setNotification(!notification);

		setOption(option);
	};

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
						fillRule='evenodd'
						clipRule='evenodd'
						d='M16.6919 10.9375H5C4.48223 10.9375 4.0625 10.5178 4.0625 10C4.0625 9.48223 4.48223 9.0625 5 9.0625H16.6919C17.1 7.61968 18.4265 6.5625 20 6.5625C21.5735 6.5625 22.9 7.61968 23.3081 9.0625H25C25.5178 9.0625 25.9375 9.48223 25.9375 10C25.9375 10.5178 25.5178 10.9375 25 10.9375H23.3081C22.9 12.3803 21.5735 13.4375 20 13.4375C18.4265 13.4375 17.1 12.3803 16.6919 10.9375ZM18.4375 10C18.4375 9.13706 19.1371 8.4375 20 8.4375C20.8629 8.4375 21.5625 9.13706 21.5625 10C21.5625 10.8629 20.8629 11.5625 20 11.5625C19.1371 11.5625 18.4375 10.8629 18.4375 10Z'
						fill='white'
					/>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M13.3081 20.9375H25C25.5178 20.9375 25.9375 20.5178 25.9375 20C25.9375 19.4822 25.5178 19.0625 25 19.0625H13.3081C12.9 17.6197 11.5735 16.5625 10 16.5625C8.42653 16.5625 7.09998 17.6197 6.6919 19.0625H5C4.48223 19.0625 4.0625 19.4822 4.0625 20C4.0625 20.5178 4.48223 20.9375 5 20.9375H6.6919C7.09998 22.3803 8.42653 23.4375 10 23.4375C11.5735 23.4375 12.9 22.3803 13.3081 20.9375ZM8.4375 20C8.4375 19.1371 9.13706 18.4375 10 18.4375C10.8629 18.4375 11.5625 19.1371 11.5625 20C11.5625 20.8629 10.8629 21.5625 10 21.5625C9.13706 21.5625 8.4375 20.8629 8.4375 20Z'
						fill='white'
					/>
				</svg>
				Settings
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

					<div className='buttons-block'>
						<button className='delete-btn' onClick={() => clearData('all')}>
							<div className='empty'></div>
							Clear all data
							<svg
								width='30'
								height='30'
								viewBox='0 0 30 30'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M13.0871 10.5871C13.4532 10.221 14.0468 10.221 14.4129 10.5871L17.5 13.6742L20.5871 10.5871C20.9532 10.221 21.5468 10.221 21.9129 10.5871C22.279 10.9532 22.279 11.5468 21.9129 11.9129L18.8258 15L21.9129 18.0871C22.279 18.4532 22.279 19.0468 21.9129 19.4129C21.5468 19.779 20.9532 19.779 20.5871 19.4129L17.5 16.3258L14.4129 19.4129C14.0468 19.779 13.4532 19.779 13.0871 19.4129C12.721 19.0468 12.721 18.4532 13.0871 18.0871L16.1742 15L13.0871 11.9129C12.721 11.5468 12.721 10.9532 13.0871 10.5871Z'
									fill='white'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M10.5074 6.18752C9.0686 6.18752 7.70947 6.84832 6.82082 7.97993L2.36893 13.649C1.74616 14.442 1.74616 15.558 2.36894 16.3511L6.82082 22.0201C7.70947 23.1517 9.0686 23.8125 10.5074 23.8125H23.8158C25.7143 23.8125 27.2533 22.2735 27.2533 20.375V9.62502C27.2533 7.72654 25.7143 6.18752 23.8158 6.18752H10.5074ZM8.29546 9.13796C8.82865 8.459 9.64413 8.06252 10.5074 8.06252H23.8158C24.6787 8.06252 25.3783 8.76207 25.3783 9.62502V20.375C25.3783 21.238 24.6787 21.9375 23.8158 21.9375H10.5074C9.64413 21.9375 8.82865 21.541 8.29546 20.8621L3.84358 15.193C3.75461 15.0797 3.75461 14.9203 3.84358 14.807L8.29546 9.13796Z'
									fill='white'
								/>
							</svg>
						</button>
						<button className='delete-btn' onClick={() => clearData('history')}>
						<div className='empty'></div>

							Clear history data
							<svg
								width='30'
								height='30'
								viewBox='0 0 30 30'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M13.0871 10.5871C13.4532 10.221 14.0468 10.221 14.4129 10.5871L17.5 13.6742L20.5871 10.5871C20.9532 10.221 21.5468 10.221 21.9129 10.5871C22.279 10.9532 22.279 11.5468 21.9129 11.9129L18.8258 15L21.9129 18.0871C22.279 18.4532 22.279 19.0468 21.9129 19.4129C21.5468 19.779 20.9532 19.779 20.5871 19.4129L17.5 16.3258L14.4129 19.4129C14.0468 19.779 13.4532 19.779 13.0871 19.4129C12.721 19.0468 12.721 18.4532 13.0871 18.0871L16.1742 15L13.0871 11.9129C12.721 11.5468 12.721 10.9532 13.0871 10.5871Z'
									fill='white'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M10.5074 6.18752C9.0686 6.18752 7.70947 6.84832 6.82082 7.97993L2.36893 13.649C1.74616 14.442 1.74616 15.558 2.36894 16.3511L6.82082 22.0201C7.70947 23.1517 9.0686 23.8125 10.5074 23.8125H23.8158C25.7143 23.8125 27.2533 22.2735 27.2533 20.375V9.62502C27.2533 7.72654 25.7143 6.18752 23.8158 6.18752H10.5074ZM8.29546 9.13796C8.82865 8.459 9.64413 8.06252 10.5074 8.06252H23.8158C24.6787 8.06252 25.3783 8.76207 25.3783 9.62502V20.375C25.3783 21.238 24.6787 21.9375 23.8158 21.9375H10.5074C9.64413 21.9375 8.82865 21.541 8.29546 20.8621L3.84358 15.193C3.75461 15.0797 3.75461 14.9203 3.84358 14.807L8.29546 9.13796Z'
									fill='white'
								/>
							</svg>
						</button>
						<button className='delete-btn' onClick={() => clearData('spents')}>
						<div className='empty'></div>

							Clear spents data
							<svg
								width='30'
								height='30'
								viewBox='0 0 30 30'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M13.0871 10.5871C13.4532 10.221 14.0468 10.221 14.4129 10.5871L17.5 13.6742L20.5871 10.5871C20.9532 10.221 21.5468 10.221 21.9129 10.5871C22.279 10.9532 22.279 11.5468 21.9129 11.9129L18.8258 15L21.9129 18.0871C22.279 18.4532 22.279 19.0468 21.9129 19.4129C21.5468 19.779 20.9532 19.779 20.5871 19.4129L17.5 16.3258L14.4129 19.4129C14.0468 19.779 13.4532 19.779 13.0871 19.4129C12.721 19.0468 12.721 18.4532 13.0871 18.0871L16.1742 15L13.0871 11.9129C12.721 11.5468 12.721 10.9532 13.0871 10.5871Z'
									fill='white'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M10.5074 6.18752C9.0686 6.18752 7.70947 6.84832 6.82082 7.97993L2.36893 13.649C1.74616 14.442 1.74616 15.558 2.36894 16.3511L6.82082 22.0201C7.70947 23.1517 9.0686 23.8125 10.5074 23.8125H23.8158C25.7143 23.8125 27.2533 22.2735 27.2533 20.375V9.62502C27.2533 7.72654 25.7143 6.18752 23.8158 6.18752H10.5074ZM8.29546 9.13796C8.82865 8.459 9.64413 8.06252 10.5074 8.06252H23.8158C24.6787 8.06252 25.3783 8.76207 25.3783 9.62502V20.375C25.3783 21.238 24.6787 21.9375 23.8158 21.9375H10.5074C9.64413 21.9375 8.82865 21.541 8.29546 20.8621L3.84358 15.193C3.75461 15.0797 3.75461 14.9203 3.84358 14.807L8.29546 9.13796Z'
									fill='white'
								/>
							</svg>
						</button>
						<CSSTransition
							in={notification}
							timeout={300}
							classNames='notification-modal'
							unmountOnExit
							nodeRef={notifRef}>
							<Notification
								setNotification={setNotification}
								notification={notification}
								option={option}
								setAllData={setAllData}
								refs={notifRef}
							/>
						</CSSTransition>
						<p>
							Также вы можете манипулировать балансом вписывая в поля ввода
							отрицательные значения: "-100"
						</p>
					</div>
				</div>
			</CSSTransition>
		</div>
	);
};

export default memo(Settings);