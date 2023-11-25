import React, { type ReactElement } from 'react'
import { NavBarContainer } from './styles'
import NavBarOption from '../NavBarOption/NavBarOption'

const NavBar = (): ReactElement => {
  return (
    <NavBarContainer>
      <NavBarOption name="Dashboard" optionNumber={0}/>
      <NavBarOption name="Comments" optionNumber={1}/>
      <NavBarOption name="Upload" optionNumber={2}/>
    </NavBarContainer>
  )
}

export default NavBar
