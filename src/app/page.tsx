import Navbar from '@/components/navbar/Navbar'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.aMain}>
      <Navbar height={40} width={150} text="Contact us" />
    </main>
  )
}
