import React, { useState, type ReactElement } from 'react'
import './styles.css'

import { RxCross1 } from 'react-icons/rx'
import { useSelector } from 'react-redux'

const Items = ({ title, description, item, id, priority }: any): ReactElement => {
  const token = useSelector((state: any) => state.loginReducer.token)
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedPriority, setEditedPriority] = useState(priority);

  const handleDelete = (): void => {
    fetch(`http://localhost:3000/item/${id}`, {
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

  const handleSave = () => {
    // Puedes guardar los datos editados aquí, por ejemplo, enviándolos a un servidor o actualizando el estado global de la aplicación.
    // En este ejemplo, simplemente actualizamos el estado local y salimos del modo de edición.
    setIsEditing(false);
    // Aquí puedes agregar lógica para guardar los datos editados, como enviar una solicitud al servidor.
  };

  const handleCancel = () => {
    // Si se cancela la edición, restauramos los valores originales y salimos del modo de edición.
    setEditedTitle(title);
    setEditedDescription(description);
    setEditedPriority(priority);
    setIsEditing(false);
  };

  return (
    <div className={`${item === 'bug' ? 'bug' : 'feature'}`}>
      <div className="titleDelete">
        <p>{item}</p>
        <div className="delete" onClick={handleDelete}>
          {/* Puedes mantener tu lógica existente para eliminar el elemento */}
          <RxCross1 />
        </div>
      </div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <input
            type="text"
            value={editedPriority}
            onChange={(e) => setEditedPriority(e.target.value)}
          />
        </>
      ) : (
        <>
          <div className="title">{editedTitle}</div>
          <div className="content">{editedDescription}</div>
          <div className="priority">Priority: {editedPriority}</div>
        </>
      )}
      {isEditing ? (
        // Botones en el modo de edición
        <>
          <button className="save-button" onClick={handleSave}>
            Guardar
          </button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancelar
          </button>
        </>
      ) : (
        // Botón para entrar al modo de edición
        <button className="edit-button" onClick={() => setIsEditing(true)}>
          Editar
        </button>
      )}
    </div>
  );
}

export default Items
