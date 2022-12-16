var initialPrice = document.querySelector("#initial-price")
var stocksQuantity = document.querySelector("#stocks-quantity")
var currentPrice = document.querySelector("#current-price")
var button = document.querySelector("#submit-btn")
var output = document.querySelector("#output-box")



button.addEventListener('click', clickHandler)

function clickHandler() {
   var  ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr)
}


function calculateProfitAndLoss(initial, quantity, current){
     if(initial > current){
        var lossValue = (initial-current)*quantity;
        var lossPercentage = (lossValue/initial) *100;
        showOutput(`hey the loss is ${lossValue} Rs. and the percentage is ${lossPercentage}%`);
     }
     else if(current > initial){
        var profitValue = (current-initial)*quantity;
        var profitPercentage = (profitValue/initial)*100;

        showOutput(`hey the proft is ${profitValue} Rs. and the percentage is ${profitPercentage}%`);
     }
     else {
        showOutput(" No Loss , No Profit");
     }
}


function showOutput(message){
    output.innerHTML = message;
}

