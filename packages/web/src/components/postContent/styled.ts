import styled from 'styled-components'

export const CoverContainer = styled.div`
  ${({ theme }) => `
    border-radius: 0 0 0 ${theme.radius.md};
  `}
  overflow: hidden;
`

export const FlexRowBottom = styled.div`
  display: flex;
  align-items: flex-end;
`

export const FloatLeft = styled.div`
  position: absolute;
  width: 20rem;
  height: 15rem;
  z-index: 10;
  right: 0;
  top: 0;
`
