import React, { type ReactElement } from 'react'
import { ContentDiv, MainDiv } from './styles'
import { NavBar, Slide } from '../index'

const App = (): ReactElement => {
  return (
    <MainDiv>
      <ContentDiv>
        <NavBar/>
      </ContentDiv>
      <ContentDiv>
        <Slide/>
      </ContentDiv>
    </MainDiv>

  )
}

export default App
