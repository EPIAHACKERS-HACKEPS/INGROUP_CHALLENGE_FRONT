import React, { useState } from 'react'
import FileItem from './../FileItem/FileItem'
import styles from './FileList.module.scss'
const FileList = ({ files, removeFile } : any) => {

    const [filess, setfiless] = useState(files);

    const deleteFileHandler = (_name : any) => {
            removeFile(_name)
    }

    return (
        <ul className={styles.fileItem}>
            {
                files.map((f : any, index : number)  =>(<FileItem
                    key={index}
                    file={f}
                    deleteFile={deleteFileHandler} />)) 
            }
        </ul>
    )
}

export default FileList