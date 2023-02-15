document.getElementById('btn-submit').addEventListener('click', function () {
    let userEmail = document.getElementById('email').value;
    let userPassword = document.getElementById('password').value;

    if(userEmail === 'anayet@gmail.com' && userPassword === 'secretpassword') {
        window.location.href = 'bank.html';
    }
})