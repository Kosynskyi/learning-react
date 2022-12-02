import React from 'react';

export const VideoList = ({ videos, onSelect }) => {
  return (
    <ul>
      {videos.map(item => (
        <li key={item.id}>
          <p onClick={() => onSelect(item.link)}>{item.link}</p>
        </li>
      ))}
    </ul>
  );
};
