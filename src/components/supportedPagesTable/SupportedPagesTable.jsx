'use client'
import { useState } from 'react'
import styles from './supportedPagesTable.module.css'
import { formatDateString } from '@/utils/formatters'
import { useLoader } from '@/context/LoaderContext'

const SupportedPagesTable = ({ pages }) => {
  const { showLoader, hideLoader } = useLoader()
  const [pagesData, setPagesData] = useState(pages)

  const handleSyncButton = async () => {
    showLoader()
    const updatedPagesData = []
    for (let i = 0; i < pages.length; i++) {
      try {
        await fetch(`/api/page/${pages[i].id}/feed`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            //   Authorization: `Bearer ${page.accessToken}`,
          },
        })
          .then((response) => {
            if (!response.ok) {
              console.error('Sync failed')
              // hideLoader()
            }
            return response.json()
          })
          .then((data) => {
            console.log('success', data)
            updatedPagesData.push(data)
          })
      } catch (error) {
        throw new Error(`Error syncing: ${error}`)
      }
    }
    setPagesData(updatedPagesData)
    console.log(updatedPagesData)
    hideLoader()
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
            <th>Last Synchronized at</th>
          </tr>
        </thead>
        <tbody>
          {pagesData.map((page) => (
            <tr key={page.id} className={styles.dataRow}>
              <td>{page.id}</td>
              <td>{page.providerPageId}</td>
              <td>{page.name}</td>
              <td>*****</td>
              <td>{formatDateString(page.tokenExpiresAt)}</td>
              <td>{formatDateString(page.lastSynchronizedAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className={styles.syncButton} onClick={() => handleSyncButton()}>
        Synchronize
      </button>
    </div>
  )
}

export default SupportedPagesTable
