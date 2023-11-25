import React, { type ReactElement } from 'react'
import { NavBarContainer } from './styles'
import { NavBarOption } from '../index'

interface NavBarProps {
  options: Array<{
    name: string
    optionNumber: number
  }>
}

const NavBar = ({ options }: NavBarProps): ReactElement => {
  return (
    <NavBarContainer>
      {
        options.map((option) => {
          return <NavBarOption name={option.name} optionNumber={option.optionNumber}/>
        })
      }
    </NavBarContainer>
  )
}

export default NavBar
