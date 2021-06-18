import axios from 'axios';
const API_URL = 'http://c8fa37a604d5.ngrok.io';
// const API_URL = 'http://localhost:3001';

export const middleware = async (module, params = {}) => {
  let data;
  switch (module) {
    case 'getRestaurants':
      // const params = new URLSearchParams();
      // params.append('data', params);
      // console.log(data);
      console.log('process ignites');
      // eslint-disable-next-line no-case-declarations
      data = await axios.get(`${API_URL}/api/restaurants/list`, {
        // data = await axios.post(`${API_URL}/api/getorders`, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      // console.log(data);
      return data;
    case 'sendRestaurantData':
      // eslint-disable-next-line no-case-declarations
      data = await axios
        .post(`${API_URL}/restaurants/get-url`, params, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .catch((error) => {
          console.log(error);
        });

      return data;
    default:
      return false;
  }
};
