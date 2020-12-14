import PropTypes from 'prop-types';
import ButtonLoadMore from './ButtonStyle';

const Button = ({ uploadMorePhotos }) => {
  return (
    <ButtonLoadMore type="button" onClick={() => uploadMorePhotos()}>
      Load more
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  uploadMorePhotos: PropTypes.func.isRequired,
};

export default Button;
