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
  const pages = await em.find(Page, { provider: 'facebook' })
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
  pageId: string
  pageName: string
  accessToken: string
  tokenType: string
  expiresAt: Date
}) => {
  const orm = await getOrm()
  const em = orm.em.fork()

  const pageRepository = em.getRepository(Page)
  let page = await pageRepository.findOne({
    provider: pageData.provider,
    pageId: pageData.pageId,
  })
  if (!page) {
    page = new Page()
    page.provider = pageData.provider
    page.pageId = pageData.pageId
  }

  page.pageName = pageData.pageName
  page.accessToken = encrypt(pageData.accessToken)
  page.tokenType = pageData.tokenType
  page.expiresAt = pageData.expiresAt

  await em.persistAndFlush(page)

  return page
}
