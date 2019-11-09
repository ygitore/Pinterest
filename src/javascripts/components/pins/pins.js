import $ from 'jquery';
import pinData from '../../helpers/data/pinsData';
import utils from '../../helpers/utilities';
import deletePinData from '../deletePin/deletePin';
import './pins.scss';

const deletePinFromBoard = (e) => {
  const splitId = e.target.id.split(':');
  const boardId = splitId[1];
  const pinId = splitId[0];
  deletePinData.deletePin(pinId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildPins(boardId);
    })
    .catch((err) => console.error(err));
};

const buildPins = (boardId) => {
  pinData.getPinsUsingBoardId(boardId)
    .then((allPins) => {
      let domString = '<h2>The Pins</h2>';
      domString += '<div class="d-flex flex-wrap justify-content-between">';
      allPins.forEach((pin) => {
        domString += `<div><img src="${pin.imageUrl}" class="card btn btn-light" id ="${pin.id}"></img>`;
        domString += `<button class = "delete-pin-from-board" id="${pin.id}:${boardId}">Delete pin from board</button></div>`;
      });
      domString += '</div>';
      utils.printToDom('pins-belongs-to-boards', domString);
      $('.delete-pin-from-board').click(deletePinFromBoard);
    })
    .catch((err) => console.error(err));
};
export default { buildPins, deletePinFromBoard };
