import "./style.css"

function CardGame (icon = "black", alt = "card back") {
    return /* html */`
        <article class="card-game">
            <img class="back_card" src="assets/${icon}.png" alt="${alt}">
        </article>
    `
}

export default CardGame