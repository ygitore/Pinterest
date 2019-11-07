import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

import monkeyBut from './googleLogin.png';
import utilities from '../../helpers/utilities';

import './Auth.scss';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  // changes the status of whether user loggedIn or logged out
};

const loginButton = () => {
  const domString = `
    <input type = "text" placeholder = "Email:"><br>
    <input type = "password" placeholder = "password"><br>  
    <p><i>Forgot password?</i><button>reset</button></p>
    <button id="google-auth">
      <img class = "loginbuttonImg" src=${monkeyBut} />
    </button>
  `;
  utilities.printToDom('auth', domString);
  $('#google-auth').click(signMeIn);
};

export default { loginButton };
