const dateFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', dateFormatOptions).format(date)
}

const dateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: false,
}
export const formatDateString = (dateString) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', dateTimeFormatOptions).format(date)
}
