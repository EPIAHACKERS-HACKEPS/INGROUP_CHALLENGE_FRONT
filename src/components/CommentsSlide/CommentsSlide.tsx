import React, { type ReactElement } from 'react'
import UserStory from './UserStory/UserStory'
import "./styles.css"

const CommentsSlide = (): ReactElement => {
  return (
    <div className='Container'>
      <UserStory title={"Error graficos"} description={"Error en el motor grafico del gta6 creando un bug que elimina gran parte del progreso"}/>
    </div>
  )
}

export default CommentsSlide
