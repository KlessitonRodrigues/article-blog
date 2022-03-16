import * as s from './styled'

type Props = {
  color?: string
  shadowLevel?: 'sm' | 'md' | 'lg'
  style?: React.CSSProperties
  children?: React.ReactNode
}

export default function Container({
  color = 'surface',
  shadowLevel = 'sm',
  style,
  children,
}: Props) {
  return (
    <s.Container color={color} shadowLevel={shadowLevel} style={style}>
      {children}
    </s.Container>
  )
}
