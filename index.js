const gameContainer = document.querySelector('.game-container');
const resultContainer = document.querySelector('.result-container');
const playerSelection = document.querySelector('.player-selection');
const houseSelection = document.querySelector('.house-selection');
const resultBox = document.querySelector('.resultbox');
const result = document.querySelector('.resultbox--result');
const dotLoading = document.querySelector('.dot-loading');
const resetBtn = document.querySelector('.btn-reset');
let score = document.querySelector('.scorebox--number');
const rulesBtn = document.querySelector('.btn-rules');
const closeModal = document.getElementById('close-modal');
const rulesModal = document.querySelector('.rules-modal-overlay');
const playAgainBtn = document.querySelector('.btn-play-again')

playAgainBtn.addEventListener('click', handlePlayAgainBtn);

function resetGame() {
    gameContainer.style.display = "grid";
    resultContainer.style.display = "none";
    playerSelection.innerHTML = '';
    houseSelection.innerHTML = '';
    resultBox.style.display = 'flex';
    dotLoading.style.display = "grid"

}
// handlePlayAgainBtn
function handlePlayAgainBtn(event) {
    resetBtn();
}
/****GAME-CONTAINER****/
gameContainer.addEventListener('click', handleGameEvent)
//handleGameEvent
function handleGameEvent(event) {
    const btnActionElement = event.target.closest('.btn-action')
    const playerIcon = btnActionElement.classList[1].split('-')[0];
    gameContainer.style.display = "none";
    resultContainer.style.display = "grid"
    playerSelection.innerHTML = `<div class="icon-wrapper  ${playerIcon}-icon">
<img src="/images/icon-${playerIcon}.svg" alt="${playerIcon}">
</div>`
    resultBox.style.display = 'none';
    const houseIcon = getHouseSelection();
    setTimeout(() => {
        getGameResult(playerIcon, houseIcon);
        displayGameResult(houseIcon, playerIcon);
    }, 5000)
}
// displayGameResult
function displayGameResult(houseIcon) {
    dotLoading.style.display = 'none';
    resultBox.style.display = 'flex';
    houseSelection.innerHTML = `<div class="icon-wrapper  ${houseIcon}-icon">
<img src="/images/icon-${houseIcon}.svg" alt="${houseIcon}">
</div>`
}
// getGameResult
function getGameResult(playerIcon, houseIcon) {
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

function getHouseSelection() {
    const actions = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * actions.length);
    return actions[randomIndex];
}

/****RESET****/
resetBtn.addEventListener('click', handleResetBtn);
// handleResetBtn
function handleResetBtn() {
    score.textContent = 0;
    resetGame();
}

/****RULES-MODAL****/
rulesBtn.addEventListener('click', handleRulesBtn);
closeModal.addEventListener('click', handleRulesBtn);
rulesModal.addEventListener('click', handleRulesBtn);
// handleRulesBtn
function handleRulesBtn(event) {
    console.log(event.target);
    if (event.target === rulesBtn) {
        rulesModal.style.display = rulesModal.style.display === 'block' ? 'none' : 'block';
    } else if (event.target === closeModal) {
        rulesModal.style.display = 'none';
    }
    else if (event.target.className === 'rules-modal-overlay') {
        rulesModal.style.display = 'none';
    } else {
        return;
    }
}
