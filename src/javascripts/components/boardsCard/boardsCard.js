import boardsData from '../../helpers/data/boardsData';
import pins from '../pins/pins';
import utils from '../../helpers/utilities';


const myButtonClick = (e) => {
  pins.buildPins(e.target.id);
};
const buildBoards = (uid) => {
  boardsData.getBoardData(uid)
    .then((allBoards) => {
      let domString = '<h2>The boards</h2>';
      domString += '<div class="d-flex flex-wrap justify-content-between">';
      allBoards.forEach((board) => {
        domString += `<button class="card btn btn-light" id ="${board.id}">${board.name}</button>`;
      });
      domString += '</div>';
      utils.printToDom('machine', domString);
      allBoards.forEach((x) => {
        document.getElementById(`${x.id}`).addEventListener('click', myButtonClick);
      });
    })
    .catch((err) => console.error(err));
};
export default { buildBoards };
