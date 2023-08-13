const API_VERSION = 'v17.0'
const API_BASE_URL = `https://graph.facebook.com/${API_VERSION}`

export interface IPageData {
  id: string
  name: string
  access_token: string
}

export const getPageData = async (
  pageId: string,
  accessToken: string,
): Promise<IPageData> => {
  const urlParams = new URLSearchParams({
    fields: 'id,name,access_token',
    access_token: accessToken,
  })
  const url = new URL(`${API_BASE_URL}/${pageId}?${urlParams}`)

  return await fetch(url).then((it) => it.json())
}
