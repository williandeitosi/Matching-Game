import PlayerName from "../../components/playerName";
import "./style.css"
import ScoreBar from "../../components/ScoreBar";
import VS from "../../components/VS";
import ArrowDown from "../../components/ArrowDown";



function ScoreBoard() {
  return /*html*/ `
        <header class="score_board">
            ${ArrowDown(1)}
            ${PlayerName("Player 1")}
            ${ScoreBar(1)}
            ${VS("VS")}
            ${ScoreBar(2)}
            ${PlayerName("Player 2")}
        </header>
    `;
}

export default ScoreBoard;
