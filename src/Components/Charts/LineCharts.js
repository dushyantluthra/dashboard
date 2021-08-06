import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import './LineCharts.css'

const data = [
  {
    name: "Week 1",
    Guest: 400,
    Users: 240,
    amt: 240
  },
  {
    name: "Week 2",
    Guest: 300,
    Users: 139,
    amt: 221
  },
  {
    name: "Week 3",
    Guest: 200,
    Users: 980,
    amt: 229
  },
  {
    name: "Week 4",
    Guest: 278,
    Users: 390,
    amt: 200
  },
  
];



const LineCharts = () => {
    return (
        <div className="chart-wrapper">
            <div className="chart-title">
            Activities
            </div>
           
        <div className="chart">
        <ResponsiveContainer width= '100%' height='100%'>
<LineChart
label="Activities"
    width={'100%'}
    height={'100%'}
    data={data}
            >

    <CartesianGrid strokeDasharray="3 3" />
    <Label value="Activities" position="insideTopLeft">Activities</Label>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend iconType="circle" iconSize={5} align="right" verticalAlign="top" layout="horizontal"/>
      <Line
        type="monotone"
        dataKey="Users"
        stroke="#9BDD7C"
        activeDot={{ r: 5 }}
      />
      <Line type="monotone" dataKey="Guest" stroke="#E9A0A0" />
    </LineChart>

    </ResponsiveContainer>
            
            </div>
        </div>
    )
}

export default LineCharts
