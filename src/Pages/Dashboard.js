import React from 'react';
import './Dashboard.css';
import Card from '../Components/Card/Card';
import LineCharts from '../Components/Charts/LineCharts';
import LeftWidget from '../Components/Widget/LeftWidget';
import RightWidget from '../Components/Widget/RightWidget';


const Dummydata = [
	{
		background: '#DDEFE0',
		icon: 'SystemUpdateAltRounded',
		text: 'Total Revenuues',
		number: '$2,129,430',
	},

	{
		background: '#F4ECDD',
		icon: 'LocalOfferOutlined',
		text: 'Total Transactions',
		number: '1,520',
	},
	{
		background: '#EFDADA',
		icon: 'ThumbUpAltOutlined',
		text: 'Total Likes',
		number: '9,721',
	},
	{
		background: '#DEE0EF',
		icon: 'PeopleOutline',
		text: 'Total Users',
		number: '829',
	},
];

const Dashboard = () => {
	return (
		<div className='wrapper-dashboard'>
			<div className='card-list'>
				{
                    Dummydata.map((e) => {
					return (
						<Card
							backgroundcolor={e.background}
							text={e.text}
							number={e.number}
							icon={e.icon}
                            key={e.text}
						/>
					);
				})
            }
			</div>
			<div className='line-chart'><LineCharts/></div>
			<div className='widget'> <LeftWidget/><RightWidget/></div>
		</div>
	);
};

export default Dashboard;
