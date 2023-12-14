export default function getBarChartData(timesheet) {
  return {
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
}
