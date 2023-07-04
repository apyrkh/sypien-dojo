import { useRouter } from 'next/navigation'

function getColorFromPathname(route) {
  if (route === '/') {
    return 'red'
  } else if (route === '/news') {
    return 'yellow'
  }
  // Add more route-color mappings as needed
  return 'default-color'
}

const router = useRouter()
export const pageColor = getColorFromPathname(router.pathname)
