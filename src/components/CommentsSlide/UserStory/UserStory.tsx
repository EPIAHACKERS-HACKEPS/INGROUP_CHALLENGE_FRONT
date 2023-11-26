import React from 'react';
import './styles.css';

export default function UserStory({ title, description }: any) {
  return (
    <div className="prueba">
      <div className="title">{title}</div>
        <div className="content">{description}
        </div>
    </div>
  );
}
