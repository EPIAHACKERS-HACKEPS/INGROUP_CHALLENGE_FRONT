import React from 'react';
import { FaFileAlt, FaSpinner, FaTrash } from 'react-icons/fa';
import styles from './FileItem.module.scss'

interface File {
  name: string;
  isUploading: boolean;
}

interface FileItemProps {
  file: File;
  deleteFile: (name: string) => void;
}

const FileItem: React.FC<FileItemProps> = ({ file, deleteFile }) => {
  console.log(file.name)
  return (
    <>
      <li className={styles.fileItem} key={file.name}>
        <FaFileAlt />
        <p className={styles.fileName}>{file.name}</p>
        <div className={styles.actions}>
          <div className={styles.loading}></div>
          {file.isUploading && (
            <FaSpinner className={styles.faSpin} onClick={() => deleteFile(file.name)} />
          )}
          {!file.isUploading && (
            <FaTrash className={styles.faTrash}
              onClick={() => deleteFile(file.name)}
            />
          )}
        </div>
      </li>
    </>
  );
};

export default FileItem;
