import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import List from './ImageGalleryStyle';

const ImageGallery = ({ imgArray, onClickImage }) => {
  return (
    imgArray.length > 0 && (
      <List className="ImageGallery">
        {imgArray.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            onClickImage={() => onClickImage(largeImageURL)}
          />
        ))}
      </List>
    )
  );
};

ImageGallery.propTypes = {
  imgArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ),
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGallery;
