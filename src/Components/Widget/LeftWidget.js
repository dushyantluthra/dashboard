import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import './LeftWidget.css'


const data = [
  { name: 'Basic Tees', value: 400 , color: '#98D89E', index:0},
  { name: 'Custom Short Pants', value: 300 , color:'#EE8484', index:1},
  { name: 'Super Hoodies', value: 300 , color:'#F6DC7D', index:2},
];

const COLORS = ['#98D89E', '#EE8484', '#F6DC7D'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};



const LeftWidget = () => {
    return (
        <div className="left-wrapper">
            <div className="left-title">
            Top Propducts
            </div>
            <div className="pie-wrapper">
            <div className="piechart">
            
<ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
            
            
            
            </div>
            
            <div className="chart-data" >
            {data.map((e)=>{
                return(
<div style={{display:'flex', flexDirection:'row', marginBottom:'1.125em'}} key={e.name}>
<div className="bullet" style={{background:`${e.color}`}} key={e.value}></div>
            <div className="legend" key={e.index}>{e.name}</div>
            </div>
                )
            })}
            
            </div>
            </div>
        </div>
    )
}

export default LeftWidget
