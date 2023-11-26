import React from 'react';
import './styles.css';

export default function ProgressBar({ percentage, name, color, icon: Icon }: any) {
  return (
    <div className="progress-container"   style={{
        border: '1px solid #D1D5DB',
        borderLeft: `7px solid ${color}`
      }}>
      <div className="title">{name}</div>
      <div className="content">
        <div className="progress-text">{`${percentage}%`}</div>
        <div className="progress-bar">
        <div
  className="progress-bar-fill"
  style={{
    width: `${percentage}%`,
    background: color,
    border: '1px solid #D1D5DB',
    borderLeft: `7px solid ${color}`
  }}
/>

        </div>
        <div className="icon">
        {Icon && <Icon />}
        </div>
      </div>
    </div>
  );
}
