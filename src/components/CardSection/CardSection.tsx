import React, { type ReactElement } from 'react'
import { CardContainer } from './styles'
import { Card } from '../index'

const CardSection = (): ReactElement => {
  return (
    <CardContainer>
      <Card title="Bugs" image="http://getdrawings.com/vectors/bug-vector-1.png" text="999"/>
      <Card title="Features"
            image="http://cdn.onlinewebfonts.com/svg/img_364590.png" text="999"/>
    </CardContainer>
  )
}

export default CardSection
