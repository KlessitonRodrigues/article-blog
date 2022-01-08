export async function getAllPosts() {
  const res = await fetch('https://article-blog-api-krds.herokuapp.com/posts')
  const posts = await res.json()
  return posts
}
