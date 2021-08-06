import React from 'react';
import './Sidebar.css';
import {
	PieChart,
	LocalOffer,
	Event,
	AccountCircle,
	Settings,
} from '@material-ui/icons';
const Sidebar = (props) => {
	const { onClickValue } = props;
	const classes = {
		dash: 'icon-dash',
		shed: 'icon-shed',
		trans: 'icon-trans',
		users: 'icon-users',
		settings: 'icon-settings',
	};
	return (
		<div className='container'>
			<div className='top'>
				<div className='heading'>Dash.</div>
				<div className='menu-items'>
					<div
						className={`${classes.dash} active`}
						onClick={(e) => {
							onClickValue(e.target.innerText);
							document.querySelector('.icon-trans').classList.remove('active');
							document.querySelector('.icon-shed').classList.remove('active');
							document.querySelector('.icon-users').classList.remove('active');
							document
								.querySelector('.icon-settings')
								.classList.remove('active');
							document.querySelector(
								'.icon-dash'
							).className = `${classes.dash} active`;
						}}>
						<span>
							<PieChart />
						</span>{' '}
						Dashboard
					</div>
					<div
						className={classes.trans}
						onClick={(e) => {
							onClickValue(e.target.innerText);
							document.querySelector('.icon-dash').classList.remove('active');
							document.querySelector('.icon-shed').classList.remove('active');
							document.querySelector('.icon-users').classList.remove('active');
							document
								.querySelector('.icon-settings')
								.classList.remove('active');
							document.querySelector(
								'.icon-trans'
							).className = `${classes.trans} active`;
						}}>
						<span>
							<LocalOffer />
						</span>{' '}
						Transactions
					</div>
					<div
						className={classes.shed}
						onClick={(e) => {
							onClickValue(e.target.innerText);
							document.querySelector('.icon-trans').classList.remove('active');
							document.querySelector('.icon-dash').classList.remove('active');
							document.querySelector('.icon-users').classList.remove('active');
							document
								.querySelector('.icon-settings')
								.classList.remove('active');
							document.querySelector(
								'.icon-shed'
							).className = `${classes.shed} active`;
						}}>
						<span>
							<Event />
						</span>{' '}
						Schedules
					</div>
					<div
						className={classes.users}
						onClick={(e) => {
							onClickValue(e.target.innerText);
							document.querySelector('.icon-trans').classList.remove('active');
							document.querySelector('.icon-shed').classList.remove('active');
							document.querySelector('.icon-dash').classList.remove('active');
							document
								.querySelector('.icon-settings')
								.classList.remove('active');
							document.querySelector(
								'.icon-users'
							).className = `${classes.users} active`;
						}}>
						<span>
							<AccountCircle  />
						</span>{' '}
						Users
					</div>

					<div
						className={classes.settings}
						style={{ marginBottom: '0px' }}
						onClick={(e) => {
							onClickValue(e.target.innerText);
							document.querySelector('.icon-trans').classList.remove('active');
							document.querySelector('.icon-shed').classList.remove('active');
							document.querySelector('.icon-users').classList.remove('active');
							document.querySelector('.icon-dash').classList.remove('active');
							document.querySelector(
								'.icon-settings'
							).className = `${classes.settings} active`;
						}}>
						<span>
							<Settings />
						</span>{' '}
						Settings
					</div>
				</div>
			</div>
			<div className='bottom'>
				<div className='help'>help</div>
				<div className='Contact-us'>Contact Us</div>
			</div>
		</div>
	);
};

export default Sidebar;
