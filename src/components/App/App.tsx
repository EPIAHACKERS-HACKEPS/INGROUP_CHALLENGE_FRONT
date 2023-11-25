import React, { type ReactElement } from 'react'
import { ContentDiv, MainDiv } from './styles'
import { DashboardSlide, NavBar } from '../index'

const App = (): ReactElement => {
  return (
    <MainDiv>
      <ContentDiv>
        <NavBar/>
      </ContentDiv>
      <ContentDiv>
        <DashboardSlide/>
      </ContentDiv>
    </MainDiv>

  )
}

export default App
