import React from 'react';
import './styles.css';
import { CiViewList } from 'react-icons/ci'; // Make sure you have this icon in your 'react-icons' package

export default function NumberBar({ number, name, color, icon: Icon }: any) {
  return (
    <div className="progress-container"   style={{
        border: '1px solid #D1D5DB',
        borderLeft: `7px solid ${color}`
      }}>
      <div className="title">{name}</div>
      <div className="content">
        <div className="progress-text">{`${number}`}</div>
        <div className="icon">
        {Icon && <Icon />}
        </div>
      </div>
    </div>
  );
}
