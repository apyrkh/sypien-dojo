import { FbPagePostAttachment } from '@server/fb/types'

export const transformAttachmentToPhotos = (
  attachment: FbPagePostAttachment,
) => {
  if (!attachment.data) return []

  const photos: { id: string; height: number; width: number }[] = []
  attachment.data.forEach((it) => {
    if (it.media?.type === 'photo') {
      photos.push({
        id: it.media.target.id,
        height: it.media.image.height,
        width: it.media.image.width,
      })
    } else if (it.media?.type === 'album' && it.subattachments) {
      photos.push(...transformAttachmentToPhotos(it.subattachments!))
    }
  })

  return photos
}
