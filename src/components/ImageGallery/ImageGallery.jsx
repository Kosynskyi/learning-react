import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { ImagesList } from './ImageGallery.styled';

export const ImageGallery = ({ items, openModal }) => {
  return (
    <ImagesList>
      {items &&
        items.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            previewImg={webformatURL}
            tags={tags}
            openModal={() => openModal(largeImageURL, tags)}
          />
        ))}
    </ImagesList>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
  openModal: PropTypes.func.isRequired,
};
