import React from 'react'
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useSelector } from 'react-redux'

// Define the type for the data items
interface IData {
  name: string
  value: number
}

const Example: React.FC = () => {
  // Data array with features and bugs
  const dashboardCount = useSelector((state: any) => state.dashboardCountReducer)

  const data: IData[] = [
    { name: 'Feature', value: dashboardCount.features || 0 },
    { name: 'Bug', value: dashboardCount.bugs || 0 }
  ]

  const getColor = (name: string) => {
    return name === 'Feature' ? 'green' : '#881d1c'
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Bar dataKey="value" fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.name)}/>
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Example
