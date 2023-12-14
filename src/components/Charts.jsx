import 'chart.js/auto';
import React, { useEffect, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { getTimesheet } from '../api';
import getBarChartData from '../utils/getBarChartData';
import getLineChartData from '../utils/getLineChartData';
import getPieChartData from '../utils/getPieChartData';

export default function Charts() {
  const [timesheet, setTimesheet] = useState({});
  const [startDate, setStartDate] = useState('');

  useEffect(() => {
    const fetchTimesheet = async () => {
      try {
        const response = await getTimesheet(startDate);
        if (response.status === 'success') {
          setTimesheet(response.data);
        }
      } catch (error) {
        console.log('error fetching timesheet', error);
      }
    };
    fetchTimesheet();
  }, [startDate]);

  const barChartData = getBarChartData(timesheet);
  const pieChartData = getPieChartData(timesheet);
  const lineChartData = getLineChartData(timesheet);

  const barChartOptions = {
    responsive: true,

    maintainAspectRatio: true,
    scales: {
      x: {
        type: 'category', // Specify the x-axis as a category scale
        labels: Object.keys(timesheet),
      },
      y: {
        beginAtZero: true,
        stepSize: 5,
        min: 0,
        max: 24,
      },
    },
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        type: 'category', // Specify the x-axis as a category scale
        labels: Object.keys(timesheet),
      },
      y: {
        beginAtZero: true,
        stepSize: 5,
        min: 0,
        max: 24,
      },
    },
  };

  return (
    <div className="container">
      <div className="form-div-container">
        <h3>Select week's start date to get your weekly timesheet</h3>
        <form>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
        </form>
      </div>
      <div className="chart-container">
        <div>
          <Bar data={barChartData} options={barChartOptions} />
        </div>
        <div>
          <Pie
            data={pieChartData}
            options={{
              aspectRatio: 2,
            }}
          />
        </div>
        <div>
          <Line data={lineChartData} options={lineChartOptions} />
        </div>
      </div>
    </div>
  );
}
