import React from 'react';

const ImageError = ({ query }) => {
  return (
    <div role="alert">
      <p>По вашему запросу нету данных о {query}</p>
    </div>
  );
};

export default ImageError;
