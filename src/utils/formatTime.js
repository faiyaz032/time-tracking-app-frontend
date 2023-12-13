export default function formatTime(timeString) {
  const [hours, minutes, seconds] = timeString.split(':');

  const dateObj = new Date();
  dateObj.setHours(hours, minutes, seconds);

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'Asia/Dhaka',
  };

  const formattedTime = new Intl.DateTimeFormat('en-US', options).format(dateObj);
  return formattedTime;
}
