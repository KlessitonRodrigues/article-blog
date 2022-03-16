import Link from 'next/link'

import { Post, postMock } from '../../data/constants/post'
import * as s from './styled'

type Props = {
  post: Post
}

const PostUI = ({ post = postMock }: Props) => {
  const publishedData =
    new Date(post.published_at).toLocaleDateString('en', {
      month: 'short',
      day: '2-digit',
      year: '2-digit',
    }) || ''

  return (
    <Link href={`/posts/${post.slug}`} passHref={true}>
      <s.Container>
        <s.CoverBox>
          <s.Cover src={post.cover.url} />
        </s.CoverBox>
        <s.Background>
          <s.Title>{post.title}</s.Title>
          <s.Author>
            <b>{post.author.name}</b> at {publishedData}
          </s.Author>
          <s.Hr />
          <s.Content>{post.content.slice(0, 300)}</s.Content>
          <s.Category color={post.category.color}>
            #{post.category.name}
          </s.Category>
        </s.Background>
      </s.Container>
    </Link>
  )
}

export default PostUI
