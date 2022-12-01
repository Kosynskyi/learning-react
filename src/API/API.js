import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?';
const API_KEY = '29264717-b9fb9898101ea1ba2d7fc7d7c';

export const getPictures = async (query, page = 1) => {
  try {
    return await axios.get(
      `${BASE_URL}key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
    );
  } catch (error) {
    throw new Error(error);
  }
};

// try {
//     const params = {
//       url: axios.defaults.baseURL,
//       params: {
//         key: KEY,
//         q: name,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//         page,
//         per_page: 12,
//       },
//     };

//     return await axios(params);
