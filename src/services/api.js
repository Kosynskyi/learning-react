import axios from 'axios';

axios.defaults.baseURL = 'https://6336f6985327df4c43cd2ee3.mockapi.io';

export const addMaterial = async values => {
  const response = await axios.post('/materials', values);
  return response.data;
};

export const getMaterials = async () => {
  const response = await axios.get('/materials');
  return response.data;
};

export const deleteMaterial = async id => {
  const response = await axios.delete(`/materials/${id}`);
  return response.data;
};

export const changeMaterial = async updateObj => {
  const response = await axios.put(`materials/${updateObj.id}`, updateObj);
  return response.data;
};
