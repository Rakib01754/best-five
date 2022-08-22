function removeButtonDisplay() {
    const selectedListElement = document.getElementById('selected-area');
    const selectedNumber = selectedListElement.childElementCount;
    const removeBtn = document.getElementById('remove-btn');
    if (selectedNumber === 0) {
        removeBtn.classList.remove('d-none')
    }
}

function playerSelection(player) {
    const playerParent = player.parentNode;
    const playerParentChilds = playerParent.childNodes;
    const playerNameField = playerParentChilds[1];
    const playerName = playerNameField.innerText;
    const selectedListElement = document.getElementById('selected-area');
    const selectedNumber = selectedListElement.childElementCount;
    if (selectedNumber === 5) {
        alert('আপনি আপনার দলের জন্য সর্বোচ্চ ৫ জন খেলোয়াড় নির্বাচন করতে পারবেন।');
        return;
    }
    removeButtonDisplay();
    const playersLi = document.createElement('li');
    playersLi.innerText = playerName;
    const selectedPlayer = selectedListElement.appendChild(playersLi);
    player.setAttribute('disabled', "")
    player.innerText = 'Selected';
    return selectedPlayer;

}
