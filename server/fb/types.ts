// see also https://github.com/siman/facebook-graph-api/blob/master/index.d.ts
export interface FbExtendedAccessToken {
  access_token: string
  token_type: 'bearer'
  expires_in?: number
}

export interface FbPaginatedResponse<T> {
  data: T[]
  paging: {
    cursors: {
      before: string
      after: string
    }
  }
}

export type FbDateTime = string

export interface FbPlace {
  id: string
  name: string
  location: {
    city: string
    country: string
    latitude: number
    longitude: number
  }
}

export interface FbTag {
  id: string
  name: string
  type?: 'page' | 'group' | 'user' | 'event'
  offset: number
  length: number
}

export type FbPageId = string

export interface FbPage {
  id: FbPageId
  name: string
  access_token: string
}

export type FbPagePostId = string // "<page_id>_<id>"

export interface FbPagePostFrom {
  id: FbPageId
  name: string
}

export interface FbPagePostAttachment {
  data: {
    // this is probably when no media (e.g. content is restricted)
    type?: 'native_templates'
    title?: string
    description?: string

    media?: {
      type: 'map' | 'album' | 'photo'
      title: string
      url: string // equals to target.url
      target: {
        id: string
        url: string
      }
      image: {
        src: string
        height: number
        width: number
      }
    }
    subattachments?: FbPagePostAttachment
  }[]
}

export interface FbPagePost {
  id: FbPagePostId
  created_time: FbDateTime
  from: FbPagePostFrom
  full_picture?: string // expires
  icon?: string
  is_expired: boolean
  is_hidden: boolean
  is_published: boolean
  message?: string
  message_tags?: FbTag[]
  parent_id?: string
  permalink_url: string
  place?: FbPlace
  story?: string
  story_tags: FbTag[]
  timeline_visibility: string

  attachments?: FbPagePostAttachment
}
