import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItemStyle';

const ImageGalleryItem = ({ webformatURL, tags, onClickImage }) => {
  return (
    <GalleryItem>
      <GalleryItemImage src={webformatURL} alt={tags} onClick={onClickImage} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
