import styled from '@emotion/styled'

interface StyledTitleProps {
  dark: boolean
}

export const StyledTitle = styled.h1`
  font-size: 3rem;
  color: ${({ dark }: StyledTitleProps) => dark ? 'black' : 'white'};
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin: 0.25rem;
`
