const rulesBtn = document.getElementById('btn-rules');
const closeModal = document.getElementById('close-modal');
const rulesModal = document.querySelector('.rules-modal-overlay');
//events
rulesBtn.addEventListener('click', handleRulesBtn);
closeModal.addEventListener('click', handleRulesBtn);
rulesModal.addEventListener('click', handleRulesBtn);
// handleRulesBtn
function handleRulesBtn(event) {
    const isRulesBtnClicked = event.target === rulesBtn;
    const isCloseModalClicked = event.target === closeModal;
    const isOverlayClicked = event.target.className === 'rules-modal-overlay';
    rulesModal.style.display = isRulesBtnClicked ?
        (rulesModal.style.display === 'block' ? 'none' : 'block') :
        (isCloseModalClicked || isOverlayClicked) ? 'none' : rulesModal.style.display;
}
