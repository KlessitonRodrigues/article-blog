import { DefaultTheme } from 'styled-components'

import * as s from './styled'

type Props = {
  title?: boolean
  color?: keyof DefaultTheme['colors']
  bold?: boolean
  children?: React.ReactNode
  content?: String
  style?: React.CSSProperties
}

export default function Text(props: Props) {
  return props.title ? (
    <s.Title {...props} color={props.color || 'onSurface'}>
      {props.children || props.content}
    </s.Title>
  ) : (
    <s.Paragraph {...props}>{props.children || props.content}</s.Paragraph>
  )
}
