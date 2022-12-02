import React from 'react';

export const ReaderList = ({ currentPublication }) => {
  return (
    <div>
      {<h2>{currentPublication.title}</h2>}
      {<p>{currentPublication.text}</p>}
    </div>
  );
};
