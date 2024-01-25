//game
const gameContainer = document.querySelector('.game-container');

//result
const resultContainer = document.querySelector('.result-container');
const playerSelection = document.querySelector('.player-selection');
const houseSelection = document.querySelector('.house-selection');
const resultBox = document.querySelector('.resultbox');
const dotLoading = document.querySelector('.dot-loading');

//Reset & playAgain
const resetBtn = document.querySelector('.btn-reset');
const playAgainBtn = document.querySelector('.btn-play-again');

//scoreNumber & gameResult
const score = document.querySelector('.scorebox--number');
const result = document.querySelector('.resultbox--result');

//gameContainer
gameContainer.addEventListener('click', handleGameEvent)
function handleGameEvent(event) {
    const btnActionElement = event.target.closest('.btn-action');
    const playerIcon = btnActionElement.classList[1].split('-')[0];
    gameContainer.style.display = "none";
    resultContainer.style.display = "grid"
    resultBox.style.display = 'none';
    playerSelection.innerHTML =
        `<div class="icon-wrapper ${playerIcon}-icon">
        <img src="/images/icon-${playerIcon}.svg" alt="${playerIcon}">
        </div>`
    setTimeout(() => {
        handleGameTimeout(playerIcon)
    }, 5000)
}

// handleGameTimeout
function handleGameTimeout(playerIcon) {
    dotLoading.style.display = 'none';
    const houseIcon = getHouseSelection();
    houseSelection.innerHTML = `<div class="icon-wrapper  ${houseIcon}-icon">
        <img src="/images/icon-${houseIcon}.svg" alt="${houseIcon}">
    </div>`;
    setGameScoreAndResult(playerIcon, houseIcon);
    resultBox.style.display = 'flex';
}

// getHouseSelection
function getHouseSelection() {
    const actions = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * actions.length);
    return actions[randomIndex];
}

// setGameResult
function setGameScoreAndResult(playerIcon, houseIcon) {
    if (playerIcon === houseIcon) {
        result.textContent = "DRAW"
    } else if (
        (playerIcon === 'rock' && houseIcon === "scissors") ||
        (playerIcon === 'paper' && houseIcon === 'rock') ||
        (playerIcon === 'scissors' && houseIcon === 'paper')
    ) {
        result.textContent = "YOU WIN";
        score.textContent = parseInt(score.textContent) + 1;
    } else {
        result.textContent = "YOU LOSE"
        score.textContent = parseInt(score.textContent) - 1;
    }
}

//resetGame
function resetGame() {
    gameContainer.style.display = "grid";
    resultContainer.style.display = "none";
    playerSelection.innerHTML = '';
    houseSelection.innerHTML = '';
    resultBox.style.display = 'flex';
    dotLoading.style.display = "grid";
}

//resetBtn
resetBtn.addEventListener('click', handleResetBtn);
function handleResetBtn() {
    score.textContent = 0;
    resetGame();
}

//playAgainBtn
playAgainBtn.addEventListener('click', handlePlayAgainBtn);
function handlePlayAgainBtn(event) {
    event.preventDefault();
    resetGame();
}