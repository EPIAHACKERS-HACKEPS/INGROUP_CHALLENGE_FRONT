import React, { type ReactElement } from 'react'
import Title from '../Title'
import { Separator } from './styles'
import { CardSection } from '../index'

const DashboardSlide = (): ReactElement => {
  return (
    <>
      <Title title={'Dashboard'} dark={true}/>
      <Separator/>
      <CardSection/>
    </>
  )
}

export default DashboardSlide
