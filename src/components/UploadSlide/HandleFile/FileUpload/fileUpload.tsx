import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import styles from './FileList.module.scss'

const FileUpload = ({ files, setFiles, removeFile, repoId }: any): void => {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleValue = (): void => {
    setValue('')
  }

  const uploadPdf = (file: any): void => {
    const pdf = new FormData()
    pdf.append('pdf_file', file, file.name)
    if (repoId !== 0) {
      pdf.append('repositories', repoId)
    }
    console.log(pdf)

    fetch('http://95.23.148.176:5000/api/v1/classification', {
      headers: {
        ContentType: 'multipart/form-data'
      },
      method: 'POST',
      body: pdf
    }).then(async (result) => {
      setFiles([])
      const response = await result.json()
      console.log(response)
      console.log(response.Result)
    }).catch((error) => {
      console.log(error)
    })
  }

  const uploadHandler = (event: any): void => {
    const file = event.target.files
    if (files.some((f: File) => f.name === file.name)) {
      console.log('si')
    }
    console.log(files)
    const newFiles = [...files, ...file]
    setFiles(newFiles)
    console.log(files)
  }

  const handleClick = (event: any): void => {
    if (files.length === 0) {

    } else {
      for (let i = 0; i < files.length; i++) {
        uploadPdf(files[i])
      }
    }
  }

  return (
    <>
      <div className={styles.fileCard}>
        <div className={styles.fileInputs}>
          <input
            type="file"
            onChange={uploadHandler}
            multiple
            accept="application/pdf"
            value={value}
            onClick={handleValue}
          />
          <button>
            <i>
              <FaPlus/>
            </i>
            Subir
          </button>
        </div>

        <p className={styles.fileMain}>Archivos permitidos</p>
        <p className={styles.fileInfo}>PDF, JPG, PNG</p>
      </div>
      {isLoading && <div className={styles.loadingOverlay}/>}
    </>
  )
}

export default FileUpload
