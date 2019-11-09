import pinsData from './pinsData';
import utils from '../utilities';
// import boardsData from './boardsData';

const displayPinsBelongsToBoard = (boardId) => new Promise((resolve, reject) => {
  pinsData.getPinsUsingBoardId()
    .then((pins) => {
      let domString = '<h2> The Pins</h2>';
      domString += '<div>';
      const allPins = pins.filter((x) => x.boardId === boardId);
      allPins.forEach((pin) => {
        domString += `<p>${pin.name}</p>`;
      });
      domString += '</div>';
      utils.printToDom('pin-board', domString);
    })
    .catch((err) => reject(err));
});
export default { displayPinsBelongsToBoard };
