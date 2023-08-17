const options = { year: 'numeric', month: 'long', day: 'numeric' }
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', options).format(date)
}
