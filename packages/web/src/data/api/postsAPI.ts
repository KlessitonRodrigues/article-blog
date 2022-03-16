import { Post, postMock } from '../constants/post'

const url = 'https://article-blog-api-krds.herokuapp.com/posts'

export default class PostsAPI {
  static postCache: Post[] = []

  static async getAllPosts(): Promise<Post[]> {
    if (this.postCache.length) return this.postCache

    const res = await fetch(url)
    const posts = await res.json()
    this.postCache = posts
    return posts || []
  }

  static async getPostBySlug(postSlug: string): Promise<Post> {
    if (this.postCache.length) {
      return this.postCache.find((post) => post.slug === postSlug)
    }

    const res = await fetch(`${url}?slug=${postSlug}`)
    const posts = await res.json()
    return posts[0] || postMock
  }

  static async getAllSlugs() {
    if (!this.postCache.length) await this.getAllPosts()
    return this.postCache.map((post) => post.slug)
  }
}
