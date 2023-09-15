'use client'
import { useState } from 'react'
import styles from './supportedPagesTable.module.css'
import { formatDate, formatDateString } from '@/utils/formatters'
import { useLoader } from '@/context/LoaderContext'

const SupportedPagesTable = ({ pages }) => {
  const { showLoader, hideLoader } = useLoader()
  const [pagesData, setPagesData] = useState(pages)

  const handleSyncButton = async (pageId) => {
    showLoader()
    try {
      const response = await fetch(`/api/page/${pageId}/feed`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()

      setPagesData((prevPagesData) => {
        return prevPagesData.map((page) => {
          if (page.id === pageId) {
            return {
              ...data,
              tokenExpiresAt: new Date(data.tokenExpiresAt),
              lastSynchronizedAt: new Date(data.lastSynchronizedAt),
            }
          }
          return page
        })
      })
    } catch (error) {
      console.error(`Error syncing: ${error}`)
    } finally {
      hideLoader()
    }
  }

  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.h2}>Supported Facebook pages</h2>
      <table className={styles.table}>
        <thead>
          <tr className={styles.mainRow}>
            <th>ID</th>
            <th>Provider Page ID</th>
            <th>Name</th>
            <th>Access Token</th>
            <th>Expires at</th>
            <th>Last Sync at</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {pagesData.map((page) => (
            <tr key={page.id} className={styles.dataRow}>
              <td>{page.id}</td>
              <td>{page.providerPageId}</td>
              <td>{page.name}</td>
              <td>*****</td>
              <td>{formatDate(page.tokenExpiresAt)}</td>
              <td>
                {page.lastSynchronizedAt
                  ? formatDateString(page.lastSynchronizedAt)
                  : 'Unknown'}
              </td>
              <td>
                <button
                  className={styles.syncButton}
                  onClick={() => handleSyncButton(page.id)}
                >
                  Sync
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SupportedPagesTable
