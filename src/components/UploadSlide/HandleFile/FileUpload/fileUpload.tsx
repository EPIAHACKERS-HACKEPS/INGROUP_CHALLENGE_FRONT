import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import styles from "./FileList.module.scss";

const FileUpload = ({ files, setFiles, removeFile, repoId }: any) => {

    const [value, setValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const handleValue = () => {
      setValue("");
    };
    
    const uploadPdf = (file: any) => {
        const pdf = new FormData();
        pdf.append("pdf_file", file, file.name);
        if(repoId !== 0){
            pdf.append("repositories", repoId);
        }
        console.log(pdf);

        fetch(process.env.NEXT_PUBLIC_ORIGIN + "/api/uploadFile/", {
            headers: {
                ContentType: "multipart/form-data",
            },
            method: "POST",
            body: pdf,
        })
            .then(async (result) => {
                setFiles([])
                const response = await result.json();
                console.log(response);
                console.log(response.Result);
                preProcess(response)              
            })
            .catch((error) => {
            });
    };

    const preProcess = async(response : any) => {
        console.log(response.Result.id);
        try {
            const res = await fetch(
                process.env.NEXT_PUBLIC_ORIGIN + "/api/processFile/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(response.Result.id)
                }
            );
            const result = await res.json();
            console.log(result);
            loadFileProcessed(result.Result)

        } catch (err) {

            console.log(err);
        }
    };

    const loadFileProcessed = async(data : any) => {
        try {
            const res = await fetch(
                process.env.NEXT_PUBLIC_ORIGIN + "/api/uploadFileProcessed/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                }
            );
            const result = await res.json();
            console.log(result);

        } catch (err) {
            console.log(err);
        }
    };

    const uploadHandler = (event: any) => {
        const file = event.target.files;
        if (files.some((f : File) => f.name === file.name)){
            console.log("si")
        }
        console.log(files)
        const newFiles = [...files, ...file]
        setFiles(newFiles);
        console.log(files);
    };

    const handleClick = (event: any) => {
        if (files.length === 0) {
            return;
        }
        else{
            for (let i = 0; i < files.length; i++) {
                uploadPdf(files[i]);
            }
        }
    };

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
                            <FaPlus />
                        </i>
                        Subir
                    </button>
                </div>

                <p className={styles.fileMain}>Archivos permitidos</p>
                <p className={styles.fileInfo}>PDF, JPG, PNG</p>
            </div>
            {isLoading && <div className={styles.loadingOverlay} />}
            <button  className= {styles.sendButton}onClick={handleClick}>Enviar</button>
        </>
    );
};

export default FileUpload;
