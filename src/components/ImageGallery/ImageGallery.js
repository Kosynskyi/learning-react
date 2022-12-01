import React, { Component } from 'react';
import { getPictures } from 'API/API';
import Loader from 'components/Loader';
import ImageError from 'components/ImageError';
import ImageQueryText from 'components/ImageQueryText';
import ImageItem from 'components/ImageItem';
import Modal from 'components/Modal';

import { GalleryList } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    picture: [],
    error: null,
    status: 'idle',
    showModal: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ status: 'pending' });
      try {
        await getPictures(this.props.query, this.props.page).then(response => {
          console.log('this.props.page 1-й варіант ', this.props.page);
          if (this.props.page === 1) {
            this.setState({
              picture: response.data.hits,
              status: 'resolved',
            });
          }
        });
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      }
    }

    if (this.props.page !== prevProps.page) {
      this.setState({ status: 'pending' });
      try {
        await getPictures(this.props.query, this.props.page).then(response => {
          console.log('this.props.page 2-й варіант ', this.props.page);
          this.setState(prevState => ({
            picture:
              this.props.page > 1
                ? [...prevState.picture, ...response.data.hits]
                : response.data.hits,
            status: 'resolved',
          }));
        });
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      }
    }
  }

  // onImageClick = imgUrl => {
  //   console.log('qweqweqwe');
  // };

  openModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { picture, status } = this.state;
    const { query } = this.props;

    if (status === 'idle') {
      return <ImageQueryText />;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <ImageError query={query} />;
    }

    if (status === 'resolved') {
      return (
        <GalleryList>
          {picture.length !== 0 &&
            picture.map(({ id, previewURL, tags, largeImageURL }) => (
              <ImageItem
                key={id}
                id={id}
                previewURL={previewURL}
                tags={tags}
                // onClick={this.openModal}
              />
            ))}
        </GalleryList>
      );
    }
  }
}

export default ImageGallery;
