import 'chart.js/auto';
import React, { useEffect, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { getTimesheet } from '../api';

export default function Charts() {
  const [timesheet, setTimesheet] = useState({});
  const [startDate, setStartDate] = useState('');

  const backgroundColor = [
    'rgba(255, 99, 132, 0.7)',
    'rgba(255, 206, 86, 0.7)',
    'rgba(75, 192, 192, 0.7)',
    'rgba(153, 102, 255, 0.7)',
    'rgba(255, 159, 64, 0.7)',
    'rgba(102, 204, 102, 0.7)',
  ];

  useEffect(() => {
    const fetchTimesheet = async () => {
      const response = await getTimesheet(startDate);
      if (response.status === 'success') {
        setTimesheet(response.data);
      }
    };
    fetchTimesheet();
  }, [startDate]);

  const barChartData = {
    labels: Object.keys(timesheet),
    datasets: [
      {
        label: 'Hours',
        data: Object.values(timesheet),
        backgroundColor: ['rgba(255, 99, 132, 0.7)'],
        borderWidth: 2,
        borderColor: '#000',
      },
    ],
  };

  const pieChartData = {
    labels: Object.keys(timesheet),
    datasets: [
      {
        data: Object.values(timesheet),
        backgroundColor,
        borderWidth: 3,
        borderColor: '#000',
      },
    ],
  };

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

  const lineChartData = {
    labels: Object.keys(timesheet),
    datasets: [
      {
        label: 'Hours',
        data: Object.values(timesheet),
        fill: false,
        borderColor: 'rgba(54, 162, 235, 0.7)',
        borderWidth: 2,
      },
    ],
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

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(startDate);
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
          <button onClick={handleSubmit} type="submit">
            Get Timesheet
          </button>
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
