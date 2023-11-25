import React, { type ReactElement } from 'react'
import { CardImage, CardTitle, StyledCard, StyledCardHeader, StyledCardText } from './styles'

const Card = (): ReactElement => {
  return (
    <StyledCard>
      <StyledCardHeader>
        <CardImage/>
        <CardTitle> Bugs </CardTitle>
      </StyledCardHeader>
      <StyledCardText>
        999999
      </StyledCardText>
    </StyledCard>
  )
}

export default Card
