import React from 'react'
import { useState } from "react";
import FileUpload from "./HandleFile/FileUpload/fileUpload";
import FileList from "./HandleFile/FileList/FileList";
import styles from "./upload.module.scss";

function App() {
    const [files, setFiles] = useState<File[]>([]);
    const [repoId, setRepoId] = useState<number>(0)

    const removeFile = (filename: string) => {
        console.log(filename);
        setFiles(files.filter((file) => file.name !== filename));
    };

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.title}>Subir archivos</div>
                <div className={styles.dropdown}>
                </div>
            </div>
            <FileUpload
                files={files}
                repoId = {repoId}
                setFiles={setFiles}
                removeFile={removeFile}
            />
            <FileList files={files} removeFile={removeFile} />
        </div>
    );
}

export default App;
