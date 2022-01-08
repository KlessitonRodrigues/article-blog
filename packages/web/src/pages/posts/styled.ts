import styled from 'styled-components'

export const Container = styled.div`
  color: '#fff';
`

export const Posts = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: ${p => p.theme.screens.md}) {
  }
`
