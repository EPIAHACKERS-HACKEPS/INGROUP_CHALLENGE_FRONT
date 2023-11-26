import React, { type ReactElement } from 'react'
import { FaPlus } from 'react-icons/fa'
import styles from './FileList.module.scss'

const FileUpload = ({ files, setFiles }: any): ReactElement => {
  const uploadHandler = (event: any): void => {
    setFiles([...files, ...event.target.files])
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
    </>
  )
}

export default FileUpload
