import { getPages } from '@server/db/services/pageService'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import styles from './admin.module.css'
// import { formatDate } from '@/utils/formatters'
import SupportedPagesTable from '@/components/supportedPagesTable/SupportedPagesTable'

export default async function AdminPage() {
  const session = await getServerSession(authOptions)
  const pages = session ? await getPages() : null
  return (
    <div>
      <h1>Admin page</h1>
      <br />

      {session && (
        <>
          <SupportedPagesTable pages={pages} />
        </>
      )}
    </div>
  )
}
