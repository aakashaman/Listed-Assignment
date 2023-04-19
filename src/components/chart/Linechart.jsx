import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: {}, Guest: 400, User: 200 },
  { name: 'Week1', Guest: 300, User: 100 },
  { name: 'Week2', Guest: 500, User: 300 },
  { name: 'Week3', Guest: 200, User: 150 },
  { name: 'Week4', Guest: 600, User: 400 },
  { name: {}, Guest: 400, User: 250 },
];
const monthRanges = [
  { name: 'Jan-Feb 2023', data },
  { name: 'Feb-Mar 2023', data },
  { name: 'Mar-Apr 2023', data },
  { name: 'Apr-May 2023', data },
  { name: 'May-Jun 2023', data },
  { name: 'Jun-Jul 2023', data },
];

const Linechart = () => {
  const [range, setRange] = useState(null);

  const handleSelectChange = (value) => {
    setRange(value);
  };

  const filteredData = range
    ? monthRanges.find((item) => item.name === range)?.data || []
    : data;

  return (
    <div style={{ position: 'relative', padding: '16px',  borderRadius: '20px', }}>
      <h3>Activities</h3>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
      
        <select style={{border:"none",color:"#858585",fontSize:"14px"}} value={range} onChange={(e) => handleSelectChange(e.target.value)}>
          {monthRanges.map((range) => (
            <option value={range.name} key={range.name}>
              {range.name}
            </option>
          ))}
        </select>
      </div>
      <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '40px' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#E9A0A0', borderRadius: '50%', marginRight: '5px' }} />
          <div>Guest</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center',marginRight:"40px" }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#9BDD7C', borderRadius: '50%', marginRight: '5px' }} />
          <div>User</div>
        </div>
      </div>
      <LineChart width={1400} height={300} data={filteredData}>
        <CartesianGrid stroke="none" strokeWidth={0} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="Guest" stroke=" #E9A0A0
" strokeWidth={3} dot={{ r: 5 }} isAnimationActive={false} />
        <Line type="monotone" dataKey="User" stroke="#9BDD7C" strokeWidth={3} dot={{ r: 5 }} isAnimationActive={false} />
      </LineChart>
    </div>
  );
};

export default Linechart;
