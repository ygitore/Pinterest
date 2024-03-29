import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import builCard from '../../components/boardsCard/boardsCard';
// import dispCard from './boardPinsCard';

import './authData.scss';

const authDiv = $('#auth');
const pinBoard = $('#pin-board');
const stockDiv = $('#stock');
const machine = $('#machine');
const closeNavbar = $('#navbarSupportedContent');
const logoutNavbar = $('#navbar-button-logout');
const home = $('#navbar-button-home');
const following = $('#navbar-button-following');
const dropdownList = $('#navbarDropdownMenuLink');
const pinsBoard = $('#pins-belongs-to-boards');


const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // someone is logged in - we should NOT see auth component
      stockDiv.removeClass('hide'); // when user login, we dont see stockDiv
      logoutNavbar.removeClass('hide'); // when user login, we hide class will be removed
      home.removeClass('hide');
      machine.removeClass('hide');
      following.removeClass('hide');
      dropdownList.removeClass('hide');
      pinsBoard.removeClass('hide');
      closeNavbar.removeClass('hide');
      pinBoard.removeClass('hide');
      authDiv.addClass('hide');
      builCard.buildBoards(user.uid);
      // dispCard.displayPinsBelongsToBoard();
    } else {
      // nobody logged in SHOW auth component
      stockDiv.addClass('hide');
      logoutNavbar.addClass('hide');
      closeNavbar.addClass('hide');
      pinBoard.addClass('hide');
      pinsBoard.addClass('hide');
      home.addClass('hide');
      machine.addClass('hide');
      dropdownList.addClass('hide');
      following.addClass('hide');
      authDiv.removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
