import React, { type ReactElement } from 'react'
import { NavBarContainer } from './styles'
import { NavBarOption } from '../index'
import { v4 as uuid } from 'uuid'

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
          return <NavBarOption key={uuid()} name={option.name} optionNumber={option.optionNumber}/>
        })
      }
    </NavBarContainer>
  )
}

export default NavBar
