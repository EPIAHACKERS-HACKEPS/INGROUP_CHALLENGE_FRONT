import React, { type ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { CommentsSlide, DashboardSlide, UploadSlide } from '../index'
import { SlideContainer } from './styles'

const Slide = (): ReactElement => {
  const dashboardOption = useSelector((state: any) => state.dashboardReducer.selected)

  return (
    <SlideContainer>
      {dashboardOption === 0 && <DashboardSlide/>}
      {dashboardOption === 1 && <CommentsSlide/>}
      {dashboardOption === 2 && <UploadSlide/>}
    </SlideContainer>
  )
}

export default Slide
