export default function getLineChartData(timesheet) {
  return {
    labels: Object.keys(timesheet),
    datasets: [
      {
        label: 'Hours',
        data: Object.values(timesheet),
        fill: false,
        borderColor: 'rgba(54, 162, 235, 0.7)',
        borderWidth: 3,
      },
    ],
  };
}
