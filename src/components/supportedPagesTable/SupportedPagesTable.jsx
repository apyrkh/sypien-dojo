'use client'
// import { useState } from 'react'
import styles from './supportedPagesTable.module.css'
import { formatDate } from '@/utils/formatters'
import { useLoader } from '@/context/LoaderContext'

const SupportedPagesTable = ({ pages }) => {
  //   const [pageData, setPageData] = useState(null)
  const { showLoader, hideLoader } = useLoader()
  const handleSyncButton = async (page) => {
    try {
      showLoader()
      await fetch(`/api/page/${page.id}/feed`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //   Authorization: `Bearer ${page.accessToken}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            console.error('Sync failed')
            hideLoader()
          }
          return response.json()
        })
        .then((data) => {
          console.log('success', data)
          hideLoader()
        })
    } catch (error) {
      throw new Error(`Error syncing: ${error}`)
    }
  }
  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.h2}>Supported Facebook pages</h2>
      <table className={styles.table}>
        <thead>
          <tr className={styles.mainRow}>
            <th>Id</th>
            <th>Provider Page Id</th>
            <th>Name</th>
            <th>Access Token</th>
            <th>Expires at</th>
            <th>Last Synchronized at</th>
          </tr>
        </thead>
        <tbody>
          {pages.map((page) => (
            <tr key={page.id} className={styles.dataRow}>
              <td>{page.id}</td>
              <td>{page.providerPageId}</td>
              <td>{page.name}</td>
              <td>*****</td>
              <td>{formatDate(page.tokenExpiresAt)}</td>
              <td>{formatDate(page.lastSynchronizedAt)}</td>
              <button
                className={styles.syncButton}
                onClick={() => handleSyncButton(page)}
              >
                Sync
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SupportedPagesTable
