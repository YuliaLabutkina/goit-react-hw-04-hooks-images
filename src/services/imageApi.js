import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImgWithQuery = async (search = '', page = 1) => {
  const { data } = await axios.get(
    `/?q=${search}&page=${page}&key=18667081-1f708d4293c59a8f1b4f35978&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return data.hits;
};

export default fetchImgWithQuery;
