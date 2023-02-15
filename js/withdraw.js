document.getElementById('btn-withdraw').addEventListener('click', function () {
   
    const newWithdraw = parseFloat(getInputValue('withdraw'));
    const previousWithdraw = parseFloat(getInnerText('total-withdraw'));
    const previousBalance = parseFloat(getInnerText('balance'));
    
    errorCheck('total-withdraw', newWithdraw, previousWithdraw, 'add', 'withdraw', previousBalance);
    errorCheck('balance', newWithdraw, previousBalance, 'minus', 'withdraw', previousBalance);
})