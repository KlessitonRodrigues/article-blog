import { GetStaticProps } from 'next'

import PostsAPI from '../../data/api/postsAPI'
import type { Post } from '../../data/constants/post'

import PostUI from '../../components/post'
import * as s from './styled'

type Props = {
  posts: Post[]
}

const Posts = ({ posts = [] }: Props) => {
  const postsMap = posts.map((post, i) => <PostUI key={i} post={post} />)

  return (
    <s.Container>
      <s.Posts>{postsMap}</s.Posts>
    </s.Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await PostsAPI.getAllPosts()
  return { props: { posts } }
}

export default Posts
