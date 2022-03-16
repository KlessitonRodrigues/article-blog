type Props = {
  children?: React.ReactNode
  style?: React.CSSProperties
}

const flexStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export default function Flex({ style = flexStyle, children }: Props) {
  return <div style={style}>{children}</div>
}
