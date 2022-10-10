import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
  const data = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...data);
  // console.log(props.dataPoints.map(x => x.value));
  console.log(totalMaximum);
  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}/>
      ))}
    </div>
  );
};

export default Chart;
