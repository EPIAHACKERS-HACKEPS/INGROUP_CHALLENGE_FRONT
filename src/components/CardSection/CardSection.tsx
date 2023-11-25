import React, { type ReactElement } from 'react'
import { CardContainer } from './styles'
import { Card } from '../index'

const CardSection = (): ReactElement => {
  return (
    <CardContainer>
      <Card/>
    </CardContainer>
  )
}

export default CardSection
