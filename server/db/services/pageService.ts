import { wrap } from '@mikro-orm/core'
import { encrypt } from '@server/encryptionUtils'
import { Page } from '../entities/Page'
import { getOrm } from '../orm'

const mapPage = (page: Page) => {
  return wrap(page).toObject()
}

export const getPages = async () => {
  const orm = await getOrm()
  const em = orm.em.fork()
  const pages = await em.find(Page, { provider: 'facebook' }, { limit: 10 })
  return pages.map(mapPage)
}

export const getPage = async (id: string) => {
  const orm = await getOrm()
  const em = orm.em.fork()
  const page = await em.findOne(Page, id)
  return page ? mapPage(page) : null
}

export const createUpdatePage = async (pageData: {
  provider: string
  providerPageId: string
  name: string
  accessToken: string
  tokenExpiresAt: Date
  tokenType: string
}) => {
  const orm = await getOrm()
  const em = orm.em.fork()

  const pageRepository = em.getRepository(Page)
  let page = await pageRepository.findOne({
    provider: pageData.provider,
    providerPageId: pageData.providerPageId,
  })
  if (!page) {
    page = new Page()
    page.provider = pageData.provider
    page.providerPageId = pageData.providerPageId
  }

  page.name = pageData.name
  page.accessToken = encrypt(pageData.accessToken)
  page.tokenExpiresAt = pageData.tokenExpiresAt
  page.tokenType = pageData.tokenType

  await em.persistAndFlush(page)

  return page
}

export const updatePage = async (
  id: string,
  pageData: {
    lastSynchronizedAt: Date
  },
) => {
  const orm = await getOrm()
  const em = orm.em.fork()
  const page = await em.findOne(Page, id)
  if (!page) {
    return null
  }

  page.lastSynchronizedAt = pageData.lastSynchronizedAt

  await em.persistAndFlush(page)

  return page
}
