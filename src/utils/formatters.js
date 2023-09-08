const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
}
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', options).format(date)
}

export const formatDateString = (dateString) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', options).format(date)
}
