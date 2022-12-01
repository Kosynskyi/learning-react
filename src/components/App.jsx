import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box } from './Box';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    // showModal: false,
  };

  handleSubmit = query => {
    this.setState({ query, page: 1 });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { query, page, showModal } = this.state;

    return (
      <Box as="section" p={6}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery query={query} page={page} />
        <ToastContainer autoClose={3000} />
        {showModal && <Modal openModal={this.openModal} />}
        {query && <Button text="Load more" onClick={this.loadMore} />}

        {/* <button type="button" onClick={this.openModal}>
          Open modal
        </button> */}
      </Box>
    );
  }
}
