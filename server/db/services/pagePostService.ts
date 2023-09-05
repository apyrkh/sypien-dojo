import { Page } from '@server/db/entities/Page'
import { PagePost } from '@server/db/entities/PagePost'
import { getOrm } from '@server/db/orm'

export const getPagePosts = async () => {
  const orm = await getOrm()
  const em = orm.em.fork()
  return await em.find(PagePost, {}, { limit: 10 })
}

export const createUpdatePagePost = async (postData: {
  page: Page
  providerPostId: string
  message: string
  photos?: { id: string; height: number; width: number }[]
  createdAt: Date
}) => {
  const orm = await getOrm()
  const em = orm.em.fork()

  const postRepository = em.getRepository(PagePost)
  let post = await postRepository.findOne({
    providerPostId: postData.providerPostId,
  })
  if (!post) {
    post = new PagePost()
    post.page = postData.page
    post.providerPostId = postData.providerPostId
  }

  post.message = postData.message
  post.photos = postData.photos
  post.createdAt = postData.createdAt

  await em.persistAndFlush(post)

  return post
}
