import React, { CSSProperties } from 'react'
import styled, { DefaultTheme, css } from 'styled-components'

type themedProps = {
  color?: DefaultTheme['colors']
  bg?: DefaultTheme['colors']
  pd?: ''
  mg?: ''
  size?: number
  flex?: 'row' | 'column'
  radius?: keyof DefaultTheme['radius']
}

export const ThemedProps = styled.div<themedProps>`
  ${({ theme, color, bg, pd, mg, radius, size, flex }) => `
    color: ${color ? theme.colors[color] : theme.colors.onBackgorund};
    backgound-color: ${bg ? theme.colors[color] : theme.colors.background};
    padding: ${pd || '0 0.5rem'};
    margin: ${mg || ''};
    font-size: ${theme.font.sizes[size] || ''};
    border-radius: ${theme.radius[radius] || ''};
    ${
      flex &&
      `
    display: flex;
    flex-direction: ${flex};
    justify-content: center;
    align-items: center;
    
    `
    }
  `}
`
