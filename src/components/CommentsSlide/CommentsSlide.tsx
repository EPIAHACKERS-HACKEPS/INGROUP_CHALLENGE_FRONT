import React, { type ReactElement } from 'react'
import UserStory from './UserStory/UserStory'
import "./styles.css"
import Items from './Items/Items'
import Title from '../Title'
import { Separator } from '../DashboardSlide/styles'

const CommentsSlide = (): ReactElement => {
  return (
    <>
    <Title title={'Comments'} dark={true} />
    <Separator />
    <div className='Container'>
      <UserStory title={"Error graficos"} description={"Diferentes errores graficos"} />
      <Items title="Error Graficos" description="Eliminas y no aparecen como eliminados" item="bug"/>
      <Items title="Añadir esclavos" description="Porfa esclavos y negros, gracias!" item="feature"/>
    </div>
    <div className='Container'>
      <UserStory title={"Error graficos"} description={"Diferentes errores graficos"} />
      <Items title="Error Graficos" description="Eliminas y no aparecen como eliminados" item="bug"/>
      <Items title="Añadir esclavos" description="Porfa esclavos y negros, gracias!" item="feature"/>
    </div>
    </>
  )
}

export default CommentsSlide
