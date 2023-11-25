import React, { type ReactElement } from 'react'
import { MainDiv } from './styles'
import { NavBar, Slide } from '../index'

const App = (): ReactElement => {
  return (
    <MainDiv>
      <NavBar options={
        [
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
      }/>
      <Slide/>
    </MainDiv>
  )
}

export default App
