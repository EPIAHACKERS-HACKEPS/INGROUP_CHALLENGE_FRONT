import React, { type ReactElement, useState } from 'react'
import FileList from './HandleFile/FileList/FileList'
import styles from './upload.module.scss'
import FileUpload from './HandleFile/FileUpload/fileUpload'
import { useDispatch, useSelector } from 'react-redux'
import { addUserStory } from '../../reducers/userStory'
import { Error } from './styles'

const UploadSlide = (): ReactElement => {
  const [files, setFiles] = useState<File[]>([])
  const [error, setError] = useState<string>('')
  const token: string = useSelector((state: any) => state.loginReducer.token)
  const dispatch = useDispatch()
  const removeFile = (filename: string): void => {
    console.log(filename)
    setFiles(files.filter((file) => file.name !== filename))
  }

  const handleClick = (): void => {
    if (files.length !== 0) {
      const pdf = new FormData()

      for (const file of files) {
        pdf.append('files', file)
      }

      fetch('http://95.23.148.176:5000/api/v1/classification', {
        headers: {
          ContentType: 'multipart/form-data',
          Authorization: `Bearer ${token}`
        },
        method: 'POST',
        body: pdf
      }).then(async (result) => {
        const response = await result.json()
        if (result.status === 200) {
          if (response.userStory !== undefined) {
            dispatch(addUserStory(response.userStory))
          } else {
            setError(response.response)
          }
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }

  return (
    <div className={styles.centro}>
      <div className={styles.header}>
        <div className={styles.title}><h1>Subir archivos</h1></div>
        <div className={styles.dropdown}>
        </div>
      </div>
      <FileUpload
        files={files}
        setFiles={setFiles}
      />
      <FileList files={files} removeFile={removeFile}/>
      <button className={styles.sendButton} onClick={handleClick}>Enviar</button>
      {error !== '' && <Error>{error}</Error>}

    </div>
  )
}

export default UploadSlide
