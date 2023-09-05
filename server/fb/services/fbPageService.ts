import { FbPage, FbPagePost, FbPaginatedResponse } from '@server/fb/types'

const API_VERSION = 'v17.0'
const API_BASE_URL = `https://graph.facebook.com/${API_VERSION}`

export const getPageData = async (
  pageId: string,
  pageAccessToken: string,
): Promise<FbPage> => {
  const urlParams = new URLSearchParams({
    fields: 'id,name,access_token',
    access_token: pageAccessToken,
  })
  const url = new URL(`${API_BASE_URL}/${pageId}?${urlParams}`)

  return await fetch(url).then((it) => it.json())
}

const postFields = [
  'id',
  'created_time',
  'from',
  'full_picture', //
  'message',
  'message_tags',
  'parent_id',
  'permalink_url',
  'place',
  'attachments',
]

export const getPageFeed = async ({
  pageId,
  pageAccessToken,
  limit,
  before,
  after,
}: {
  pageId: string
  pageAccessToken: string
  limit?: number
  before?: string
  after?: string
}): Promise<FbPaginatedResponse<FbPagePost>> => {
  const urlParams = new URLSearchParams({
    fields: postFields.join(','),
    access_token: pageAccessToken,
    ...(limit ? { limit: `${limit}` } : {}),
    ...(before ? { before } : {}),
    ...(after ? { after } : {}),
  })
  const url = new URL(`${API_BASE_URL}/${pageId}/feed?${urlParams}`)

  return await fetch(url).then((it) => it.json())
}
