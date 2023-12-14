export default function getPieChartData(timesheet) {
  return {
    labels: Object.keys(timesheet),
    datasets: [
      {
        data: Object.values(timesheet),
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(102, 204, 102, 0.7)',
        ],
        borderWidth: 3,
        borderColor: '#000',
      },
    ],
  };
}
