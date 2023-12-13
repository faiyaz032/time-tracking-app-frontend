export default function formatTime(timeString) {
  const [hours, minutes, seconds] = timeString.split(':');

  const dateObj = new Date(`2000-01-01T${hours}:${minutes}:${seconds}Z`);

  const formattedTime = dateObj.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return formattedTime;
}
