import React from 'react';

const ImageItem = ({ id, previewURL, tags }) => {
  return (
    <li key={id}>
      <img src={previewURL} alt={tags} width="320" />
    </li>
  );
};

export default ImageItem;
