import axios from 'axios';
import apiKeys from '../../helpers/apiKeys';


const baseUrl = apiKeys.firebaseKeys.databaseURL;

const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);
export default { deletePin };
