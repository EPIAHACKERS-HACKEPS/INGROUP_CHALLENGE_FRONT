import React, { type ReactElement } from 'react'
import './styles.css'
import { RxCross1 } from 'react-icons/rx'
import { useSelector } from 'react-redux'

const UserStory = ({ title, description, id }: any): ReactElement => {
  const token = useSelector((state: any) => state.loginReducer.token)
  const handleDelete = (): void => {
    fetch(`http://localhost:3000/user_story/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`
      }
    }).then(async (result) => {
      const response = await result.json()
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="prueba">
      <div className="titleDelete">
        <p>User Story</p>
        <div className="delete" onClick={handleDelete}><RxCross1/></div>
      </div>
      <div className="title">{title}
      </div>
      <div className="content">{description}</div>
    </div>
  )
}

export default UserStory
