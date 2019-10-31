import firebase from 'firebase';

import '../styles/main.scss';
import apiKeys from './helpers/apiKeys.json';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
};
init();
