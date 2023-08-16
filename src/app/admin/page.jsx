import { getPages } from '@server/db/services/pageService'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import styles from './admin.module.css'
import { formatDate } from '@/utils/formatters'

export default async function AdminPage() {
  const session = await getServerSession(authOptions)
  const pages = session ? await getPages() : null
  console.log(pages)
  return (
    <div>
      <h1>Admin page</h1>
      <br />
      {/* {session && <pre>{JSON.stringify(pages, null, 2)}</pre>} */}
      {session && (
        <div className={styles.tableContainer}>
          <h2 className={styles.h2}>Supported Facebook pages</h2>
          <table className={styles.table}>
            <tr>
              <th className={styles.tableHead}>Page Id</th>
              <th className={styles.tableHead}>Page Name</th>
              <th className={styles.tableHead}>Access Token</th>
              <th className={styles.tableHead}>Expires at</th>
              <th className={styles.tableHead}>Last Synchronized At</th>
            </tr>
            {pages.map((e) => (
              <tr key={e.id}>
                <td className={styles.tableData}>{e.pageId}</td>
                <td className={styles.tableData}>{e.pageName}</td>
                <td className={`${styles.tableData}`}>
                  {'***' + e.accessToken.slice(-3)}
                </td>
                <td className={styles.tableData}>{formatDate(e.expiresAt)}</td>
                <td className={styles.tableData}>
                  {e.lastSynchronizedAt ? e.lastSynchronizedAt : 'Unknown'}
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  )
}
