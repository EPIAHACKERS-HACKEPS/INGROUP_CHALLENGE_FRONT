import React, { type ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { CommentsSlide, DashboardSlide, UploadSlide } from '../index'

const Slide = (): ReactElement => {
  const dashboardOption = useSelector((state: any) => state.dashboardReducer.selected)

  return (
    <>
      {dashboardOption === 0 && <DashboardSlide/>}
      {dashboardOption === 1 && <CommentsSlide/>}
      {dashboardOption === 2 && <UploadSlide/>}
    </>
  )
}

export default Slide
