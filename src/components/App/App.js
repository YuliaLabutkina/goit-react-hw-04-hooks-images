import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import fetchImgWithQuery from '../../services';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import PreLoader from '../PreLoader';
import Modal from '../Modal';

import { Container, ErrorText } from './AppStyle';

function App() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [imgArray, setImgArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [error, setError] = useState(null);

  const onSubmitForm = async data => {
    setSearch(data);
    setPage(1);
    setIsLoading(true);
    setError(null);

    try {
      const request = await fetchImgWithQuery(data);
      setImgArray([...request]);
      setPage(prevPage => prevPage + 1);
      scrollImg();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const uploadMorePhotos = async () => {
    setIsLoading(true);

    try {
      const request = await fetchImgWithQuery(search, page);
      setImgArray(prevArray => [...prevArray, ...request]);
      setPage(prevPage => prevPage + 1);
      scrollImg();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollImg = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const onClickImage = largeImageURL => {
    setLargeImageURL(largeImageURL);
    toggleModal();
  };

  const imgFound = imgArray.length > 0 && !error;
  const imgNotFound = search && imgArray.length === 0 && !error && !isLoading;

  return (
      <Container>
        <Searchbar onSubmitForm={onSubmitForm} />
        {error && (
          <ErrorText>Whoops, something went wrong. Try again.</ErrorText>
        )}
        {imgFound && (
          <>
            <ImageGallery
              onClickImage={onClickImage}
              imgArray={imgArray}
            />
            {!isLoading && <Button uploadMorePhotos={uploadMorePhotos} />}
            {isLoading && <PreLoader />}
            {showModal && (
              <Modal
                largeImageURL={largeImageURL}
                toggleModal={toggleModal}
              />
            )}
          </>
        )}
        {imgNotFound && (
          <ErrorText>
            No results were found for your search. Try again.
          </ErrorText>
        )}
        <ToastContainer autoClose={3000} />
      </Container>
    );
}

export default App;
