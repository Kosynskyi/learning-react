import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
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

export class App extends Component {
  state = {
    query: '',
    images: null,
    page: 1,
    status: 'idle',
    selectedImg: null,
    alt: null,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ status: 'pending' });
      try {
        if (query !== prevState.query) {
          await fetchImages(query, page).then(response => {
            this.setState({
              images: response.hits,
              status: 'resolve',
            });
          });
        }

        if (page > 1 && page !== prevState.page) {
          await fetchImages(query, page).then(response => {
            this.setState(prevState => ({
              images: [...prevState.images, ...response.hits],
              status: 'resolve',
            }));
          });
        }
      } catch (error) {
        console.log(error);
        this.setState({ status: 'rejected' });
      }
    }
  }

  handleSubmit = value => {
    this.setState({
      query: value,
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = (largeImg, tags) => {
    this.setState({ selectedImg: largeImg, alt: tags });
  };

  closeModal = () => {
    this.setState({ selectedImg: null, alt: null });
  };

  render() {
    const { images, status, query, selectedImg, alt } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {images && <ImageGallery items={images} openModal={this.openModal} />}
        {query && <Button onLoadMore={this.loadMore}>Load more</Button>}
        {status === 'pending' && <Loader />}
        {status === 'rejcted' && <ImageError />}
        {status === 'idle' && <ImageQueryText />}
        <ToastContainer autoClose={3000} />
        {selectedImg && (
          <Modal
            selectedImg={selectedImg}
            alt={alt}
            closeModal={this.closeModal}
          />
        )}
      </>
    );
  }
}
