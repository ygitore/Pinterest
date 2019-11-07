import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getCatagoriesData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/categories.json?`)
    .then((response) => {
      const demCatagories = response.data;
      const boards = [];
      Object.keys(demCatagories).forEach((boardId) => {
        demCatagories[boardId].id = boardId;
        boards.push(demCatagories[boardId].id);
      });
      resolve(boards);
    })
    .catch((err) => reject(err));
});
export default { getCatagoriesData };
