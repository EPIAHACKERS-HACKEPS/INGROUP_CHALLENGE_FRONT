import React, { type ReactElement } from 'react'
import { NavBarContainer } from './styles'
import NavBarOption from '../NavBarOption/NavBarOption'

interface NavBarProps {
  selected: number
}

const NavBar = ({ selected }: NavBarProps): ReactElement => {
  return (
    <NavBarContainer>
      <NavBarOption name="Home" optionNumber={0}/>
      <NavBarOption name="About" optionNumber={1}/>
    </NavBarContainer>
  )
}

export default NavBar
