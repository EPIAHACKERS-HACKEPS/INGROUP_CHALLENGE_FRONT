import styled from '@emotion/styled'

interface NavBarOptionProps {
  selected: boolean
}

export const NavBarOptionText = styled.h3`
  font-size: ${(props: NavBarOptionProps) => props.selected ? '2rem' : '1rem'};
  margin: 0.5rem;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: white;
  text-align: center;
  text-decoration: none;
`
