import { FbExtendedAccessToken } from '@server/fb/types'
import { appConfig } from '../../../app.config'

const API_VERSION = 'v17.0'
const API_BASE_URL = `https://graph.facebook.com/${API_VERSION}`

const SECONDS_IN_60_DAYS = 5_184_000

export const getExtendedAccessToken = async (accessToken: string) => {
  const urlParams = new URLSearchParams({
    client_id: appConfig.fb.appId,
    client_secret: appConfig.fb.appSecret,
    grant_type: 'fb_exchange_token',
    fb_exchange_token: accessToken,
  })
  const url = new URL(`${API_BASE_URL}/oauth/access_token?${urlParams}`)
  const result: FbExtendedAccessToken = await fetch(url).then((it) => it.json())

  return {
    ...result,
    expires_in: result.expires_in ?? SECONDS_IN_60_DAYS,
  }
}
