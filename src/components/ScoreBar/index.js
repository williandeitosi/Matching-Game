import "./style.css"

function ScoreBar (points = 0) {
    return /* HTML */`
        <div data-points="${points}" class="score_bar">
            <div class="box 1"></div>
            <div class="box 2"></div>
            <div class="box 3"></div>
        </div>
    `
}




export default ScoreBar
