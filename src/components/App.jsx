import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { Box } from './Box';
import { fetchImages } from './services/API';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { ImageError } from './ImageError';
import { Modal } from './Modal';
import { ImageQueryText } from './ImageQueryText';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [selectedImg, setSelectedImg] = useState(null);
  const [alt, setAlt] = useState(null);

  useEffect(() => {
    if (!query) return;

    async function getImages() {
      setStatus('pending');

      try {
        const data = await fetchImages(query, page);

        if (page === 1) {
          if (!data.totalHits) {
            toast.info(
              `couldn't find ${query}, please check your request and try again`
            );
            setQuery('');
            setStatus('resolved');
            return;
          }

          setImages(data.hits);
          setStatus('resolved');
        } else {
          setImages(prevImages => [...prevImages, ...data.hits]);
          setStatus('resolved');
        }

        if (data.hits.length === 0) {
          toast.info('everything was loaded');
          setQuery('');
        }
      } catch (error) {
        setStatus('rejected');
        toast.error('Ooops...try again');
      }
    }

    getImages();
  }, [page, query]);

  const handleSubmit = value => {
    setQuery(value);
    setPage(1);
    setImages(null);
  };

  const loadMore = () => setPage(page => page + 1);

  const openModal = (largeImg, tags) => {
    setSelectedImg(largeImg);
    setAlt(tags);
  };

  const closeModal = () => {
    setSelectedImg(null);
    setAlt(null);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {images && <ImageGallery items={images} openModal={openModal} />}
      {query && <Button onLoadMore={loadMore}>Load more</Button>}
      {status === 'pending' && <Loader />}
      {status === 'rejcted' && <ImageError />}
      {status === 'idle' && <ImageQueryText />}
      <ToastContainer autoClose={3000} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} alt={alt} closeModal={closeModal} />
      )}
    </>
  );
};
