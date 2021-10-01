import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'


const ChartsBySeller = () => {

  const data = [
    {
      name: 'Freeze Dried',
      seller: 4000,
      seller1: 4000,
      seller2: 3000,
    },
    {
      name: 'Desserts',
      seller: 4300,
      seller1: 3400,
      seller2: 4600,
    },
    {
      name: 'Entrees',
      seller: 4400,
      seller1: 4600,
      seller2: 3600,
    },
    {
      name: 'Candy',
      seller: 5700,
      seller1: 8900,
      seller2: 3200,
    }
  ];
  return (
    <LineChart width={730} height={250} data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis/>
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="seller" stroke="#82ca9d" />
    <Line type="monotone" dataKey="seller1" stroke="#82ca9d" />
    <Line type="monotone" dataKey="seller2" stroke="#82ca9d" />
    <Line type="monotone" dataKey="seller3" stroke="#82ca9d" />
    <Line type="monotone" dataKey="seller4" stroke="#82ca9d" />
    <Line type="monotone" dataKey="seller5" stroke="#82ca9d" />
    <Line type="monotone" dataKey="seller6" stroke="#82ca9d" />
  </LineChart>
    )
}




export default ChartsBySeller