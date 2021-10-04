import React, { useEffect, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import axios from 'axios'


const ChartsBySeller = () => {
  const [info, setInfo] = useState([])
  const [names, setNames] = useState([])

  useEffect(()=>{
    getInfo()
  },[])


  const normalizeChart = (data) => {
    let cat = data.map((c)=> c.category)
    let uniqueCat = [... new Set(cat)]
    return uniqueCat.map((d)=>{
      let categoryListing = data.filter((c)=> c.category === d)
      // console.log(categoryListing)
      let { category } = categoryListing[0]
      // console.log(category)
      let prices = []
      let info = categoryListing.map((c)=>{
        let seller = c.name
        prices.push(parseInt(c.prices))
        let totalPrices = 0
        for (let i = 0; i < prices.length; i++) {
          totalPrices += prices[i] 
        }
        let average = totalPrices / (prices.length + 1)
        return {seller, average}
      })
      // console.log(info)
      let normData = {}
        normData['name'] = category
      info.map((a)=>{
        normData[a.seller] = a.average
      })
      // console.log(normData)
      return normData
    })
  }

  const normalizeNames = (data) => {
    const names = data.map((d)=> d.name)
    const uniqueNames = [... new Set(names)]
    return uniqueNames
  }

  const getInfo = async () => {
    try{
      let res = await axios.get('/api/categories/prices')
      setNames(normalizeNames(res.data))
      console.log(normalizeChart(res.data))
      setInfo(normalizeChart(res.data))
    }catch(err){
      console.log(err)
    }
  }

  //stroke is the color of the line.. By doing 6 Math.randoms I come up with a random color for each line
  const renderLines = () => {
    return names.map((n)=>{
      return (
      <Line type="monotone" dataKey={n} stroke={`#${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`} /> 
      )
    })
  }
  
  
  
  return (
    <div>
      <h1>Average prices for each Category by Seller:</h1><br/>
    <LineChart width={730} height={250} data={info}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis/>
    <Tooltip />
    <Legend />
    {names && renderLines()}
  </LineChart>
  </div>
    )
}




export default ChartsBySeller