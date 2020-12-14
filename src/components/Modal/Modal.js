import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ImgContainer, Image } from './ModalStyle';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ largeImageURL, toggleModal }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return (() => {
      window.removeEventListener('keydown', handleKeyDown);
    })
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  const closeByBackdrop = ({ target, currentTarget }) => {
    if (target === currentTarget) toggleModal();
  };

  return createPortal(
      <Overlay onClick={closeByBackdrop}>
        <ImgContainer>
          <Image src={largeImageURL} alt="" />
        </ImgContainer>
      </Overlay>,
      modalRoot,
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};