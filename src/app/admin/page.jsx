import { getPages } from '@server/db/services/pageService'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function AdminPage() {
  const session = await getServerSession(authOptions)
  const pages = session ? await getPages() : null

  return (
    <div>
      <h1>Admin page</h1>
      <br />

      {session && <pre>{JSON.stringify(pages, null, 2)}</pre>}
    </div>
  )
}
