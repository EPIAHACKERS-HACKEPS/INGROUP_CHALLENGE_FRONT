import React, { type ReactElement } from 'react'
import { MainDiv } from './styles'
import { Login, NavBar, Slide } from '../index'
import { useSelector } from 'react-redux'

const NavBarOptions = [
  {
    name: 'Dashboard',
    optionNumber: 0
  },
  {
    name: 'Comments',
    optionNumber: 1
  },
  {
    name: 'Upload',
    optionNumber: 2
  }
]

const App = (): ReactElement => {
  const token: string | null = useSelector((state: any) => state.loginReducer.token)

  if (token !== null) {
    return (
      <MainDiv>
        <NavBar options={NavBarOptions}/>
        <Slide/>
      </MainDiv>
    )
  } else {
    return (
      <MainDiv>
        <Login/>
      </MainDiv>
    )
  }
}

export default App
