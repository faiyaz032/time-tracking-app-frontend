export default function formatDate(dateString) {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return formattedDate;
}
