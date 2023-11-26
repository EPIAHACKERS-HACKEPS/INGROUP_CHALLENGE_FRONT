import React from 'react';
import './styles.css';
import { RxCross1 } from "react-icons/rx";


export default function UserStory({ title, description }: any) {
    return (
        <div className="prueba">
            <div className="titleDelete">
                <p>User Story</p>
                <div className="delete"><RxCross1 /></div>
            </div>
            <div className="title">{title}
            </div>
            <div className="content">{description}</div>
        </div>
    );
}
