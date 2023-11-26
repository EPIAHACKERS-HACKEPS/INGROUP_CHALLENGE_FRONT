import styled from '@emotion/styled'

interface StyledTitleProps {
  dark: boolean
}

export const StyledTitle = styled.h1`
  font-size: 2.4rem;
  color: ${({ dark }: StyledTitleProps) => dark ? 'black' : 'white'};
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin: 0.25rem;
  margin-bottom: 1rem;
`
