import PostsAPI from '../../../data/api/postsAPI'
import { Post, postMock } from '../../../data/constants/post'
import PostContent from '../../../components/postContent'

type Props = {
  slug: string
  post: Post
}

export default function PostUI({ post }: Props) {
  return <PostContent post={post} />
}

export async function getStaticPaths() {
  const slugs = await PostsAPI.getAllSlugs()
  console.log('slugs', slugs)

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  console.log(params)
  const post = await PostsAPI.getPostBySlug(params.slug)
  return { props: { post: post || postMock } }
}
