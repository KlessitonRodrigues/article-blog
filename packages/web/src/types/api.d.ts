declare namespace Api {
  type Post = {
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
}
