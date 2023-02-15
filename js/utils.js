function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

function getInnerText(id) {
    const innerText = document.getElementById(id).innerText;
    return innerText;
}

function setInnerText(id, newValue, previousValue, checker) {
    if (checker === 'add') {
        const updatedInnerText = newValue + previousValue;
        getElement(id).innerText = updatedInnerText;
    } else {
        const updatedInnerText = previousValue - newValue;
        getElement(id).innerText = updatedInnerText;
    }
}

function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

function errorCheck(id, newValue, previousValue, checker, checker2, previousBalance) {
    if (checker2 === "deposit") {
        if (!isNaN(newValue) && newValue > 0) {
            // let currentDepositTotal = parseFloat(newDeposit) + parseFloat(previousDeposit);
            // depositElement.innerText = currentDepositTotal;
            setInnerText(id, newValue, previousValue, checker);

            getElement("deposit").value = "";
            getElement("error2").classList.add("hidden");
            getElement("error1").classList.add("hidden");
        } else {
            document.getElementById("error1").classList.remove("hidden");
            document.getElementById("error2").classList.add("hidden");
        }
    } else {
        if (newValue <= previousBalance && !isNaN(newValue) && newValue > 0) {
            // let currentDepositTotal = parseFloat(newDeposit) + parseFloat(previousDeposit);
            // depositElement.innerText = currentDepositTotal;
            setInnerText(id, newValue, previousValue, checker);
            

            document.getElementById("withdraw").value = "";
            document.getElementById("error2").classList.add("hidden");
            document.getElementById("error1").classList.add("hidden");
        } else {
            document.getElementById("error2").classList.remove("hidden");
            document.getElementById("error1").classList.add("hidden");
        }
    }
}
