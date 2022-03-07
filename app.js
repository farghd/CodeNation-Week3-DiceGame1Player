const diceImg = document.getElementById("diceImg");
const rollButton = document.getElementById("roll");
const scoreTitle = document.getElementById("scoreTitle");

const maxScore = 20;
let score = 0;
let gameEnded = false;

function resetGame() {
    score = 0;
    diceImg.setAttribute("src", "");
    rollButton.innerText = "Roll";
    gameEnded = false;
    scoreTitle.innerText = '';
}

rollButton.addEventListener('click', () => {
    if (gameEnded == true) {
        resetGame();
    } else {
        const firstRandomNum = Math.floor(Math.random() * 6) + 1;
        const firstDiceImage = "icons/dice" + firstRandomNum + ".png";
        diceImg.setAttribute("src", firstDiceImage);
        
        if (firstRandomNum === 1) {
            alert('You lost');
            rollButton.innerText = "Play Again";
            gameEnded = true;
        } else {

            score += firstRandomNum;
            scoreTitle.innerText = `Your Score: ${score}`;
            if (score >= maxScore) {
                alert('You won');
                rollButton.innerText = "Play Again";
                gameEnded = true;
            }
        }
    }
});
