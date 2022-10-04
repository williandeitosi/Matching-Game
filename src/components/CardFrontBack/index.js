import CardGame from "../CardGame";
import "./style.css";

window.cardfrontback = {}; //name space = para não ser um scopo global
window.cardfrontback.handleClick = (event) => {
  const origin = event.target;
  const cardFB = origin.closest(".card_front_back");

  cardFB.classList.toggle("active");
};

function CardFrontBack(icon, alt) {
  return /* html */ `
    <article class="card_front_back" onclick="cardfrontback.handleClick(event)">
        <div class = "front">
            ${CardGame()}
        </div>
        <div class = "back">
            ${CardGame(icon, alt)}
        </div>
    </article>
    `;
}

export default CardFrontBack;
