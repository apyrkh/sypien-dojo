import { Page } from '../entities/Page'
import { getOrm } from '../orm'

export const getPages = async () => {
  const orm = await getOrm()
  const em = orm.em.fork()

  return em.find(Page, { provider: 'facebook' })
}

export const getPage = async (id: string) => {
  const orm = await getOrm()
  const em = orm.em.fork()

  return em.findOne(Page, id)
}

export const createUpdatePage = async (pageData: {
  provider: string
  providerAccountId: string
  pageId: string
  pageName: string
  accessToken: string
  tokenType: string
  expiresAt: number
}) => {
  const orm = await getOrm()
  const em = orm.em.fork()

  const pageRepository = em.getRepository(Page)
  let page = await pageRepository.findOne({
    provider: pageData.provider,
    providerAccountId: pageData.providerAccountId,
    pageId: pageData.pageId,
  })
  if (!page) {
    page = new Page()
    page.provider = pageData.provider
    page.providerAccountId = pageData.providerAccountId
    page.pageId = pageData.pageId
  }

  page.pageName = pageData.pageName
  page.accessToken = pageData.accessToken
  page.tokenType = pageData.tokenType
  page.expiresAt = pageData.expiresAt

  await em.persistAndFlush(page)

  return page
}
