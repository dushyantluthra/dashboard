import React from 'react';
import { useState } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import Topbar from '../Components/Topbar/Topbar';
import Dashboard from './Dashboard';
import Users from './Users';
import SentimentVeryDissatisfiedSharpIcon from '@material-ui/icons/SentimentVeryDissatisfiedSharp';
import Settings from './Settings'
import './Homepage.css';




const Homepage = () => {
	const [currentPage, setCurrentPage] = useState('Dashboard');
	const changeHandler = (e) => {
		setCurrentPage(e);
	};

	return (
<div  className='wrapper' >
			<div className='page-layout'>
				<div className='side-tabs'>
					<Sidebar onClickValue={changeHandler} />
				</div>
				<div className='results'>
					<div className='top-bar'>
						<Topbar currentscreen={currentPage} />
					</div>
					<div className='page-container'>
						{currentPage === 'Dashboard' ? (
							<Dashboard />
						) : currentPage === 'Users' ? (
							<Users />
						) : currentPage === 'Settings' ? (
							<Settings/>
						) : (
							<div
								style={{
									display: 'flex',
                                    flexDirection:'column',
									alignItems: 'center',
									justifyContent: 'center',
									height: '100%',
									background: 'white',
									borderRadius: '20px',
                                    font:'Lato',
                                    color:'#0D5F9A'
								}}>
								<h1>Sorry, Currently This Page Is Out Of Service</h1>
                                <SentimentVeryDissatisfiedSharpIcon style={{fontSize:'3rem', marginTop:'20px'}}/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>	
		

		
	);
};

export default Homepage;
