import React, { useState } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import './Timeline.scss';

const Timeline = () => {
  const [selectedInterval, setSelectedInterval] = useState('Week');

  const dayData = [
    { name: '00:00', price: 33000 },
    { name: '03:00', price: 42000 },
    { name: '06:00', price: 41000 },
    { name: '09:00', price: 43000 },
    { name: '12:00', price: 44000 },
    { name: '15:00', price: 43000 },
    { name: '18:00', price: 45000 },
    { name: '21:00', price: 44500 },
  ];

  const weekData = [
    { name: 'Mon', price: 31000 },
    { name: 'Tue', price: 42000 },
    { name: 'Wed', price: 41000 },
    { name: 'Thu', price: 43000 },
    { name: 'Fri', price: 44000 },
    { name: 'Sat', price: 43000 },
    { name: 'Sun', price: 44000 },
  ];

  const monthData = [
    { name: '1', price: 35000 },
    { name: '5', price: 42000 },
    { name: '10', price: 41000 },
    { name: '15', price: 43000 },
    { name: '20', price: 44000 },
    { name: '25', price: 43000 },
    { name: '30', price: 41000 },
  ];

  const yearData = [
    { name: 'Jan', price: 40000 },
    { name: 'Feb', price: 42000 },
    { name: 'Mar', price: 41000 },
    { name: 'Apr', price: 43000 },
    { name: 'May', price: 44000 },
    { name: 'Jun', price: 43000 },
    { name: 'Jul', price: 45000 },
    { name: 'Aug', price: 46000 },
    { name: 'Sep', price: 48000 },
    { name: 'Oct', price: 47000 },
    { name: 'Nov', price: 46000 },
    { name: 'Dec', price: 48000 },
  ];

  const handleChangeInterval = (interval) => {
    setSelectedInterval(interval);
  };

  const renderData = () => {
    switch (selectedInterval) {
      case 'Day':
        return dayData;
      case 'Month':
        return monthData;
      case 'Year':
        return yearData;
      default:
        return weekData;
    }
  };

  const renderHighestValue = () => {
    const data = renderData();
    const highestPrice = Math.max(...data.map(item => item.price));
    return <span className="highest-value">Higher: ${highestPrice.toFixed(2)}</span>;
  };

  const renderLowestValue = () => {
    const data = renderData();
    const lowestPrice = Math.min(...data.map(item => item.price));
    return <span className="lowest-value">Lower: ${lowestPrice.toFixed(2)}</span>;
  };

  return (
    <div className="timeline-section">
      <div className="timeline">
        <p className={selectedInterval === 'Day' ? 'selected' : ''} onClick={() => handleChangeInterval('Day')}>Day</p>
        <p className={selectedInterval === 'Week' ? 'selected' : ''} onClick={() => handleChangeInterval('Week')}>Week</p>
        <p className={selectedInterval === 'Month' ? 'selected' : ''} onClick={() => handleChangeInterval('Month')}>Month</p>
        <p className={selectedInterval === 'Year' ? 'selected' : ''} onClick={() => handleChangeInterval('Year')}>Year</p>
      </div>
      <div className='graph'>
  <div className="graph-card">
    <div className="price-info">
      {renderHighestValue()}
      {renderLowestValue()}
    </div>
    <div className="responsive-chart">
      <ResponsiveContainer width="100%" height={80}>
        <LineChart data={renderData()}>
          <Line type="monotone" dataKey="price" stroke="#FFD700" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="price-info grayFont">
      1BTC = $5,483
    </div>
  </div>
</div>

    </div>
  );
};

export default Timeline;
