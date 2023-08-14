import { appConfig } from '../../../app.config'

const API_VERSION = 'v17.0'
const API_BASE_URL = `https://graph.facebook.com/${API_VERSION}`

interface IExtendedAccessToken {
  access_token: string
  token_type: string
}

export const getExtendedAccessToken = async (
  accessToken: string,
): Promise<IExtendedAccessToken> => {
  const urlParams = new URLSearchParams({
    client_id: appConfig.fb.appId,
    client_secret: appConfig.fb.appSecret,
    grant_type: 'fb_exchange_token',
    fb_exchange_token: accessToken,
  })
  const url = new URL(`${API_BASE_URL}/oauth/access_token?${urlParams}`)

  return await fetch(url).then((it) => it.json())
}
