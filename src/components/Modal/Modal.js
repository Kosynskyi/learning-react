import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow, Img } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
  }

  closeByEsc = ({ code }) => {
    if (code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeByBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { src, alt } = this.props.image;

    return createPortal(
      <Backdrop onClick={this.closeByBackdrop}>
        <ModalWindow>
          <Img src={src} alt={alt} />
        </ModalWindow>
      </Backdrop>,
      modalRoot
    );
  }
}

export default Modal;
