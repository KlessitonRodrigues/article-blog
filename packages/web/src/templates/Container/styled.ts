import styled from 'styled-components'

import { ThemedProps } from '../themedProps'

type ContainerProps = { color: string; shadowLevel: string }

export const Container = styled.div<ContainerProps>`
  ${({ theme, color, shadowLevel }) => `
    background-color: ${theme.colors[color] || color};
    color: ${theme.colors.onSurface};
    box-shadow: ${theme.shadow[shadowLevel]};
    border-radius: ${theme.radius.md};
    &:hover {
        box-shadow: ${shadowLevel === 'md' ? theme.shadow.lg : theme.shadow.md};
    }`}
  padding: 1rem;
  margin: 0.5rem;
  transition: 0.3s box-shadow;
  overflow: hidden;
`
