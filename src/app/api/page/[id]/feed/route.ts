import { transformAttachmentToPhotos } from '@/app/api/page/fbUtils'
import { createUpdatePagePost } from '@server/db/services/pagePostService'
import { getPage, updatePage } from '@server/db/services/pageService'
import { decrypt } from '@server/encryptionUtils'
import { getPageFeed } from '@server/fb/services/fbPageService'
import { NextResponse } from 'next/server'

export async function POST(
  _request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id
  try {
    const page = await getPage(id)
    if (!page) {
      throw new Error('Page no found')
    }
    const feed = await getPageFeed({
      pageId: page.providerPageId,
      pageAccessToken: decrypt(page.accessToken),
    })

    const pages = feed.data.map((fbPost) => {
      return createUpdatePagePost({
        page: page,
        providerPostId: fbPost.id,
        message: fbPost.message || '',
        photos: fbPost.attachments
          ? transformAttachmentToPhotos(fbPost.attachments)
          : undefined,
        createdAt: new Date(fbPost.created_time),
      })
    })

    await Promise.all(pages)

    const resultPage = await updatePage(id, { lastSynchronizedAt: new Date() })
    if (!resultPage) {
      throw new Error('Page no found')
    }

    return NextResponse.json(resultPage)
  } catch (e) {
    console.error(e)
  }

  return new Response(null, { status: 404 })
}
