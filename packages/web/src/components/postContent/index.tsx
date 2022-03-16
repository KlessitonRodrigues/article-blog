import Image from 'next/image'

import formatISODate from '../../data/util/formatISODate'
import { Post, postMock } from '../../data/constants/post'

import Text from '../../templates/text'
import Container from '../../templates/Container'
import * as s from './styled'

type Props = {
  post: Post
}

export default function PosContent({ post = postMock }: Props) {
  const publishDate = formatISODate(post.published_at)

  return (
    <Container style={{ paddingRight: '22rem', position: 'relative' }}>
      <s.FloatLeft>
        <s.CoverContainer>
          <Image
            src={post.cover.url}
            alt="cover"
            width="80%"
            height="45%"
            layout="responsive"
          />
        </s.CoverContainer>
        <Text bold color="primary" content="Author" />
        <Text content={post.author.name} />
        <Text bold color="primary" content="Category" />
        <Text content={post.category.name} />
        <Text bold color="primary" content="Publish at" />
        <Text content={publishDate} />
      </s.FloatLeft>

      <Text title color="primary" content={post.title} />
      <Text content={post.author.name} />
      <Text content={post.content} />
    </Container>
  )
}
