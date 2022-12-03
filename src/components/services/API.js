import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29264717-b9fb9898101ea1ba2d7fc7d7c';

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};

// export const fetchImages = async (query, page = 1) => {
//     const options = {
//       key: API_KEY,
//       method: 'GET',
//       q: query,
//       page,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       per_page: 12,
//     };
//
//     const response = await axios(options);
//     return response.data;
//   };
