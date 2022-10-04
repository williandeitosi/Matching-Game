import "./src/style/settings/colors.css";
import "./src/style/elements/base.css";
import ScoreBoard from "./src/objects/ScoreBoard";
import BoardGame from "./src/objects/boardGame";

// let n = prompt ("digite um numero") para pedir a quantidade de cartas que quer jogar
const app = document.getElementById("app");

app.innerHTML = `
    ${ScoreBoard()}
    ${BoardGame(6)}
`;
