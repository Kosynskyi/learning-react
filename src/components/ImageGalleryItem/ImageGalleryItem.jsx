import React from 'react';
import PropTypes from 'prop-types';
import { Image, ImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ previewImg, tags, openModal }) => {
  return (
    <ImageItem className="gallery-item">
      <Image
        src={previewImg}
        alt={tags}
        width="320"
        height="240"
        onClick={openModal}
      />
    </ImageItem>
  );
};

ImageGalleryItem.propTypes = {
  previewImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
