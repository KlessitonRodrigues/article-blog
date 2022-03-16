export type Post = {
  id: number
  title: string
  content: string
  author: {
    id: number
    name: string
    published_at: string
    created_at: string
    updated_at: string
  }
  slug: string
  category: {
    id: number
    name: string
    color: string
    published_at: string
    created_at: string
    updated_at: string
  }
  published_at: string
  created_at: string
  updated_at: string
  cover: {
    id: number
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: {
      small: {
        ext: string
        url: string
        hash: string
        mime: string
        name: string
        path: string
        size: number
        width: number
        height: number
        provider_metadata: {
          public_id: string
          resource_type: string
        }
      }
      medium: {
        ext: string
        url: string
        hash: string
        mime: string
        name: string
        path: string
        size: number
        width: number
        height: number
        provider_metadata: {
          public_id: string
          resource_type: string
        }
      }
      thumbnail: {
        ext: string
        url: string
        hash: string
        mime: string
        name: string
        path: string
        size: number
        width: number
        height: number
        provider_metadata: {
          public_id: string
          resource_type: string
        }
      }
    }
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string
    provider: string
    provider_metadata: { public_id: string; resource_type: string }
    created_at: string
    updated_at: string
  }
}

export const postMock: Post = {
  id: 0,
  title: '',
  content: '',
  author: {
    id: 0,
    name: '',
    published_at: '',
    created_at: '',
    updated_at: '',
  },
  slug: '',
  category: {
    id: 0,
    name: '',
    published_at: '',
    created_at: '',
    updated_at: '',
    color: '',
  },
  published_at: '',
  created_at: '',
  updated_at: '',
  cover: {
    id: 0,
    name: '',
    alternativeText: '',
    caption: '',
    width: 0,
    height: 0,
    formats: {
      small: {
        ext: '',
        url: '',
        hash: '',
        mime: '',
        name: '',
        path: '',
        size: 0,
        width: 0,
        height: 0,
        provider_metadata: {
          public_id: '',
          resource_type: '',
        },
      },
      medium: {
        ext: '',
        url: '',
        hash: '',
        mime: '',
        name: '',
        path: '',
        size: 0.0,
        width: 0,
        height: 0,
        provider_metadata: {
          public_id: '',
          resource_type: '',
        },
      },
      thumbnail: {
        ext: '',
        url: '',
        hash: '',
        mime: '',
        name: '',
        path: '',
        size: 0.0,
        width: 0,
        height: 0,
        provider_metadata: {
          public_id: '',
          resource_type: '',
        },
      },
    },
    hash: '',
    ext: '',
    mime: '',
    size: 0.0,
    url: '',
    previewUrl: '',
    provider: '',
    provider_metadata: { public_id: '', resource_type: '' },
    created_at: '',
    updated_at: '',
  },
}
