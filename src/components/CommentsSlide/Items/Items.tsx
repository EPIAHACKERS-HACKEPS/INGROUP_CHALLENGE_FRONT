import React from 'react';
import './styles.css';
import { RxCross1 } from "react-icons/rx";


export default function Items({ title, description, item }: any) {
    return (
        <div className={`${item === 'bug' ? 'bug' : 'feature'}`}>
            <div className="titleDelete">
                <p>{item}</p>
                <div className="delete"><RxCross1 /></div>
            </div>
            <div className="title">{title}</div>
            <div className="content">{description}</div>
        </div>
    );
}
