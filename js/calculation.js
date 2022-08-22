
// Player Selection Area Start

function playerSelection(player) {
    const playerParent = player.parentNode;
    const playerParentChilds = playerParent.childNodes;
    const playerNameField = playerParentChilds[1];
    const playerName = playerNameField.innerText;
    const selectedListArea = document.getElementById('selected-area');
    const selectedNumber = selectedListArea.childElementCount;
    if (selectedNumber === 5) {
        alert('আপনি আপনার দলের জন্য সর্বোচ্চ ৫ জন খেলোয়াড় নির্বাচন করতে পারবেন।');
        return;
    }
    const playersLi = document.createElement('li');
    playersLi.innerText = playerName;
    const selectedPlayer = selectedListArea.appendChild(playersLi);
    player.setAttribute('disabled', "")
    player.innerText = 'Selected';
    return selectedPlayer;
};

// Player Selection Area End

// Player Budget Calculation Area Start

function getInputValueById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldValueString = inputField.value;
    const inputValue = parseFloat(inputFieldValueString);
    return inputValue;




}
const calculateBtn = document.getElementById('calculate-btn');
calculateBtn.addEventListener('click', function () {
    const perPlayerBudget = getInputValueById('per-player-field');
    if (isNaN(perPlayerBudget) == true || perPlayerBudget < 0) {
        alert('দয়া করে একটি সংখ্যা অথবা টাকার সঠিক পরিমান দিন');
        return;
    }
    const selectedListArea = document.getElementById('selected-area');
    const selectedNumber = selectedListArea.childElementCount;
    const totalExpense = perPlayerBudget * selectedNumber;
    const totalExpenseField = document.getElementById('total-expense');
    totalExpenseField.innerText = totalExpense;

});
// Player Budget Calculation  Area End

// Total Team Cost Calculation Area Start
const calculateTotalBtn = document.getElementById('calculate-total');
calculateTotalBtn.addEventListener('click', function () {
    const managerCost = getInputValueById('manager-field');
    const coachCost = getInputValueById('coach-field');
    const totalExpensesField = document.getElementById('total-expense');
    const totalExpenseFieldString = totalExpensesField.innerText;
    const totalExpensesValue = parseFloat(totalExpenseFieldString);
    const amountArr = [managerCost, coachCost, totalExpensesValue];
    for (let i = 0; i < amountArr.length; i++) {
        if (isNaN(amountArr[i]) == true || amountArr[i] < 0) {
            alert('দয়া করে একটি সংখ্যা অথবা টাকার সঠিক পরিমান দিন');
            return;
        }
    }
    const overAllTotal = totalExpensesValue + managerCost + coachCost;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = overAllTotal;
})

// Total Team Cost Calculation End


