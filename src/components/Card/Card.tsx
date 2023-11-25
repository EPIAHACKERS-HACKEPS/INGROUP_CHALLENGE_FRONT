import React, { type ReactElement } from 'react'
import { CardImage, CardTitle, StyledCard, StyledCardText } from './styles'

interface CardProps {
  title: string
  image: string
  text: string
}

const Card = ({ image, text, title }: CardProps): ReactElement => {
  return (
    <StyledCard>
      <CardTitle>{title}</CardTitle>
      <StyledCardText>{text}</StyledCardText>
      <CardImage url={image}/>
    </StyledCard>
  )
}

export default Card
