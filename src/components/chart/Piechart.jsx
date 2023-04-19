import React, { useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'Basic Tees', value: 400 },
  { name: 'Custom Short Pants', value: 300 },
  { name: 'Super hoddies', value: 300 },
];

const monthRanges = [
    { name: 'Jan-Feb 2023', data: data.slice(0, 5) },
    { name: 'Feb-Mar 2023', data: data.slice(1, 6) },
    { name: 'Mar-Apr 2023', data: data.slice(2, 7) },
    { name: 'Apr-May 2023', data: data.slice(3, 8) },
    { name: 'May-Jun 2023', data: data.slice(0, 5) },
    { name: 'Jun-Jul 2023', data: data.slice(0, 5) },
  ];
  

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  

const Piechart = () => {


  const [selectedRange, setSelectedRange] = useState(monthRanges[0]);
  
  

  const handleChange = (e) => {
    const range = monthRanges.find((item) => item.name === e.target.value);
    setSelectedRange(range);
  };

  return (
    <div style={{ position: 'relative', padding: '16px',  borderRadius: '20px', width: '46%',height:"300px" }}>
       
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
      <h3>Pie Chart</h3>
        <select style={{border:"none"}} value={selectedRange.name} onChange={handleChange}>
          {monthRanges.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        
      </div>
      
      <PieChart width={500} height={200} >
        <Pie
          dataKey="value"
          nameKey="name"
          data={selectedRange.data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {selectedRange.data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          align="right"
          verticalAlign="middle"
          layout="vertical"
          iconSize={10}
          iconType="circle"
        
          formatter={(value, entry) => (
            <span style={{ color: 'black', fontWeight: '700' }}>{value}</span>
          )}
          
        />
      </PieChart>
    </div>
  );
};

export default Piechart;
