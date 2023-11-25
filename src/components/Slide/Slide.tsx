import React, { type ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { CommentsSlide, DashboardSlide, UploadSlide } from '../index'

const Slide = (): ReactElement => {
  const getDashboardOption = useSelector((state: any) => state.dashboardReducer.selected)

  return (
    <div>
      {getDashboardOption === 0 && <DashboardSlide/>}
      {getDashboardOption === 1 && <CommentsSlide/>}
      {getDashboardOption === 2 && <UploadSlide/>}
    </div>
  )
}

export default Slide
