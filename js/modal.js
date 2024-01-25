const rulesBtn = document.querySelector('.btn-rules');
const closeModal = document.getElementById('close-modal');
const rulesModal = document.querySelector('.rules-modal-overlay');

rulesBtn.addEventListener('click', handleRulesBtn);
closeModal.addEventListener('click', handleRulesBtn);
rulesModal.addEventListener('click', handleRulesBtn);

function handleRulesBtn(event) {
    const isRulesBtnClicked = event.target === rulesBtn;
    const isCloseModalClicked = event.target === closeModal;
    const isOverlayClicked = event.target.className === 'rules-modal-overlay';
    rulesModal.style.display = isRulesBtnClicked ?
        (rulesModal.style.display === 'block' ? 'none' : 'block') :
        (isCloseModalClicked || isOverlayClicked) ? 'none' : rulesModal.style.display;
}
