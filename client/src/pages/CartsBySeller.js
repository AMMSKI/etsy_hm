import React, { useEffect, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import axios from 'axios'


const ChartsBySeller = () => {
  const [info, setInfo] = useState([])

  useEffect(()=>{
    getInfo()
  },[])

//   {
//     "seller_name": "Ice Climbers",
//     "product_name": "Pierogi",
//     "price": 8,
//     "category": "Freeze Dried",
//     "id": null
// }

  const normalizeChart = (data) => {



    //return {name: category, seller1: average, seller2: average}
  }

  const getInfo = async () => {
    try{
      let res = await axios.get('/api/categories/prices')
      normalizeChart(res.data)
    }catch(err){
      console.log(err)
    }
  }
  // const data = [
  //   {
  //     name: 'Freeze Dried',
  //     seller: 4000,
  //     seller1: 4000,
  //     seller2: 3000,
  //   },
  // ];




  return (
  //   <LineChart width={730} height={250} data={data}
  //   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  //   <CartesianGrid strokeDasharray="3 3" />
  //   <XAxis dataKey="name" />
  //   <YAxis/>
  //   <Tooltip />
  //   <Legend />
  //   <Line type="monotone" dataKey="seller" stroke="#82ca9d" />
  //   <Line type="monotone" dataKey="seller1" stroke="#82ca9d" />
  //   <Line type="monotone" dataKey="seller2" stroke="#82ca9d" />
  //   <Line type="monotone" dataKey="seller3" stroke="#82ca9d" />
  //   <Line type="monotone" dataKey="seller4" stroke="#82ca9d" />
  //   <Line type="monotone" dataKey="seller5" stroke="#82ca9d" />
  //   <Line type="monotone" dataKey="seller6" stroke="#82ca9d" />
  // </LineChart>
  <div>hello</div>
    )
}




export default ChartsBySeller