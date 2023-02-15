document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDeposit = parseFloat(getInputValue('deposit'));
    const previousDeposit = parseFloat(getInnerText('total-deposit'));

    errorCheck('total-deposit', newDeposit, previousDeposit, 'add', 'deposit');

    const previousBalance = parseFloat(getInnerText('balance'));
    
    errorCheck('balance', newDeposit, previousBalance, 'add', 'deposit');

     
});
