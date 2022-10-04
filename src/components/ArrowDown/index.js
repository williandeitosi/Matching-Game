import "./style.css"

function ArrowDown (currentplayer=1) {
    return /* html */ `
        <img data-currentplayer="${currentplayer}" class="arrow_down" src="assets/icons/IconArrowDown.png" alt="arrow"  >
    `
}

export default ArrowDown