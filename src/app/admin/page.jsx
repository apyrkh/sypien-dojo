import { getPages } from '@server/db/services/pageService'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import styles from './admin.module.css'
import { formatDate } from '@/utils/formatters'

export default async function AdminPage() {
  const session = await getServerSession(authOptions)
  const pages = session ? await getPages() : null
  return (
    <div>
      <h1>Admin page</h1>
      <br />

      {session && (
        <div className={styles.tableContainer}>
          <h2 className={styles.h2}>Supported Facebook pages</h2>
          <table className={styles.table}>
            <thead>
              <tr className={styles.mainRow}>
                <th>Page Id</th>
                <th>Page Name</th>
                <th>Access Token</th>
                <th>Expires at</th>
                <th>Last Synchronized at</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr key={page.id} className={styles.dataRow}>
                  <td>{page.providerPageId}</td>
                  <td>{page.name}</td>
                  <td>*****</td>
                  <td>{formatDate(page.tokenExpiresAt)}</td>
                  <td>
                    {page.lastSynchronizedAt
                      ? page.lastSynchronizedAt
                      : 'Unknown'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
