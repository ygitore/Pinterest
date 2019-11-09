import pinData from '../../helpers/data/pinsData';
import utils from '../../helpers/utilities';

const buildPins = (boardId) => {
  pinData
    .getPinsUsingBoardId(boardId)
    .then((allPins) => {
      let domString = '<h2>The Pins</h2>';
      domString += '<div class="d-flex flex-wrap justify-content-between">';
      allPins.forEach((pin) => {
        domString += `<button class="card btn btn-light" id ="${pin.id}">${pin.name}</button>`;
      });
      domString += '</div>';
      utils.printToDom('pins-belongs-to-boards', domString);
    })
    .catch((err) => console.error(err));
};
export default { buildPins };
