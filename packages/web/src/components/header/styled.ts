import styled from 'styled-components'
import { slideLeft } from '../../styles/keyframes'

export const Container = styled.header`
  margin-bottom: 1rem;
  font-weight: bold;

  ${({ theme }) => theme.forMedia.lg} {
    margin-top: 0.5rem;
  }
`

export const Background = styled.div`
  ${({ theme }) => theme.panels.primaryPanel}
  margin: 0;
  border-radius: 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem;

  ${({ theme }) => theme.forMedia.lg} {
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.onPrimary};
`

export const NavItem = styled.li`
  ${({ theme }) => theme.hover.onPrimary};
  display: inline;
  margin: 0 1rem;
  font-size: 1.5rem;
`

export const HiddenMenu = styled.div<{ show?: boolean }>`
  ${({ theme }) => theme.panels.surfacePanel};
  display: ${({ show }) => (show ? 'block' : 'none')};
  margin: 0;
  padding: 1rem 1rem 0.5rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  top: 1rem;
  text-align: right;
`

export const HiddenMenuItem = styled.li`
  ${({ theme }) => theme.hover.onSurface};
  animation: ${slideLeft} 0.2s linear;
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
`
