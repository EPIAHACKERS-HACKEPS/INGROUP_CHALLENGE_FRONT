import React, { type ReactElement } from 'react'
import { NavBarContainer, TitleDiv, TitleImg } from './styles'
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
      <TitleDiv>
        <TitleImg src='https://xrshop.store/cdn/shop/files/Logo-XRshop_a9bdf643-b213-499c-95b0-6edad8528cd9.png?v=1675854134&width=225'/>
      </TitleDiv>
      {
        options.map((option) => {
          return <NavBarOption key={uuid()} name={option.name} optionNumber={option.optionNumber} />
        })
      }
    </NavBarContainer>
  )
}

export default NavBar
