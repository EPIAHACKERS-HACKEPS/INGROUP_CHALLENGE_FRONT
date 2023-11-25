import React, { type ReactElement } from 'react'
import { StyledTitle } from './styles'

interface TitleProps {
  title: string
  dark?: boolean
}

const Title = ({ title, dark = false }: TitleProps): ReactElement => {
  return (
    <StyledTitle dark={dark}>
      {title}
    </StyledTitle>
  )
}

export default Title
