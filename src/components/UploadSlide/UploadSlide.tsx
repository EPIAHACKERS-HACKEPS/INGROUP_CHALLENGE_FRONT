import React, { type ReactElement, useState } from 'react'
import FileList from './HandleFile/FileList/FileList'
import styles from './upload.module.scss'
import FileUpload from './HandleFile/FileUpload/fileUpload'
import { useSelector } from 'react-redux'

const UploadSlide = (): ReactElement => {
  const [files, setFiles] = useState<File[]>([])
  const [repoId, setRepoId] = useState<number>(0)
  const token: string = useSelector((state: any) => state.loginReducer.token)
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
        console.log(response)
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
        repoId={repoId}
        setFiles={setFiles}
        removeFile={removeFile}
      />
      <FileList files={files} removeFile={removeFile}/>
      <button className={styles.sendButton} onClick={handleClick}>Enviar</button>

    </div>
  )
}

export default UploadSlide
