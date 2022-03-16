import styled from 'styled-components'

type TextProps = {
  color?: string
  bold?: boolean
}

export const Title = styled.h1<TextProps>`
  ${({ theme, color, bold }) => `
  color: ${theme.colors[color]};
  font-size: ${theme.font.title.size};
  font-weight: ${bold ? 'bold' : theme.font.title.weight};
  margin: 0 0 1rem;
  `}
`

export const Paragraph = styled.p<TextProps>`
  ${({ theme, color, bold }) => `
  color: ${theme.colors[color]};
  font-size: ${theme.font.paragraph.size};
  font-weight: ${bold ? 'bold' : theme.font.paragraph.weight};
  margin: 0.5rem 0;

  `}
`
