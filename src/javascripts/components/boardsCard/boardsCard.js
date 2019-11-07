import boards from '../../helpers/data/boardsData';
import utils from '../../helpers/utilities';

const buildBoards = () => {
  boards.getBoardData()
    .then((boardId) => {
      let domString = '<h2>The boards</h2>';
      domString += '<div class="d-flex flex-wrap justify-content-between">';
      boardId.forEach((board) => {
        domString += `<a class="card btn btn-light" id ="board-${board.name}">${board.name}</a>`;
      });
      domString += '</div>';
      utils.printToDom('machine', domString);
    })
    .catch((err) => console.log(err));
};
export default { buildBoards };
