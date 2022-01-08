import styled from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => theme.panels.surfacePanel};
  padding: 0;
  margin: 0.5rem;
  max-width: 25rem;
  overflow: hidden;
  line-height: 1.25rem;
  cursor: pointer;
  position: relative;
`

export const Title = styled.h2`
  color: ${(p) => p.theme.colors.primary};
  margin-right: 0.5rem;
  height: 3.5rem;
`

export const Author = styled.span`
  display: inline;
  font-size: 0.9rem;
`

export const Content = styled.div`
  margin: 0.5rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Category = styled.span<{ color?: string }>`
  ${({ theme }) => theme.panels.primaryPanel};
  background-color: ${(p) => p.color || p.theme.colors.secondary};
  font-weight: bold;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  right: 0.5rem;
  display: block;
  width: fit-content;
  margin-left: auto;
`

export const Cover = styled.img`
  width: 100%;
  height: 100%;
`

export const CoverBox = styled.div`
  box-shadow: ${(p) => p.theme.shadow.sm};
  max-height: 10rem;
  overflow: hidden;
`

export const Background = styled.div`
  background-color: ${(p) => p.theme.colors.surface};
  padding: 1rem;
`

export const Hr = styled.hr`
  margin: 0.5rem 0;
  border-color: #0003;
`
