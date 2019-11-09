import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
const getPinsUsingBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const demPins = response.data;
      const newPins = [];
      Object.keys(demPins).forEach((pinId) => {
        demPins[pinId].id = pinId;
        newPins.push(demPins[pinId]);
      });
      resolve(newPins);
    })
    .catch((err) => reject(err));
});
export default { getPinsUsingBoardId };
