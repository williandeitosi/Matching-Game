import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./data.js";

function BoardGame(amountCards) {
  const flipAndHideCards = ($cardsActive) => {
    $cardsActive.forEach((card) => card.classList.remove("active"));
  };

  const swapPlayer = ($arrowDown) => {
    const currentplayer = $arrowDown.getAttribute("data-currentplayer");
    $arrowDown.setAttribute("data-currentplayer", currentplayer == 1 ? 2 : 1);
  };

  window.boardGame = {};
  window.boardGame.handleClick = () => {
    const $boardGame = document.querySelector(".board_game");
    const $arrowDown = document.querySelector(".arrow_down");
    const $cardsActive = $boardGame.querySelectorAll(".card_front_back.active");

    if ($cardsActive.length === 2) {
      setTimeout(() => {
        flipAndHideCards($cardsActive);
        swapPlayer($arrowDown);
      }, 1000);
    }
  };
  const CardList = cards.map((cards) => CardFrontBack(cards.icon, cards.alt));
  const htmlCards = CardList.join("");

  return /* html */ `
        <section class="board_game" onClick="boardGame.handleClick()">
            ${htmlCards}
        </section>`;
}

export default BoardGame;
