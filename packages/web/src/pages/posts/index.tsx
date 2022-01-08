import { GetStaticProps } from 'next'

import Post from '../../components/post'
import * as s from './styled'
import { getAllPosts } from './async'

type Props = {
  posts: Api.Post[]
}

const Posts = ({ posts = [] }: Props) => {
  const postsMap = posts.map((post, i) => <Post key={i} post={post} />)

  return (
    <s.Container>
      <s.Posts>{postsMap}</s.Posts>
    </s.Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()
  return { props: { posts } }
}

export default Posts
