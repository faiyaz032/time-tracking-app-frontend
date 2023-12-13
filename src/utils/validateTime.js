export default function validateTime(startTime, endTime) {
  const start = new Date(`1970-01-01 ${startTime}`);
  const end = new Date(`1970-01-01 ${endTime}`);

  return end > start;
}
