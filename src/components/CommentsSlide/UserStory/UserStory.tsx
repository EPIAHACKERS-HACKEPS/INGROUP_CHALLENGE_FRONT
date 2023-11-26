import React, { type ReactElement, useState } from 'react'
import './styles.css'
import { RxCross1 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { API_URL } from '../../../constants'
import Items from '../Items/Items'
import { v4 as uuid } from 'uuid'

const UserStory = ({ title, description, id, items }: any): ReactElement => {
  const [show, setShow] = useState(true)
  const token = useSelector((state: any) => state.loginReducer.token)
  const handleDelete = (): void => {
    fetch(`${API_URL}/user_story/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`
      }
    }).then(async (result) => {
      if (result.status === 204) {
        setShow(false)
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  if (!show) {
    return <></>
  }

  return (
    <>
      <div className="prueba">
        <div className="titleDelete">
          <p>User Story</p>
          <div className="delete" onClick={handleDelete}><RxCross1/></div>
        </div>
        <div className="title">{title}
        </div>
        <div className="content">{description}</div>
      </div>
      {
        items.map((item: any) => {
          return (
            <Items key={uuid()} title={item.title} description={item.description} item={item.item_type.type}
                   id={item.id}
                   parentShow={show}/>
          )
        })
      }
    </>

  )
}

export default UserStory
