const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: false,
}
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', options).format(date)
}
