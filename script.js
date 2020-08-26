/*
    A Simple JS CALCULATOR.
    Author: Tejendra
    Date: 26/08/2020
*/

//Addition Operation
plusButton = document.getElementById("addButton");
plusOperation = function() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    sum = parseInt(n1) + parseInt(n2);
    result = document.getElementById("result");
    result.innerText = sum;
}

plusButton.addEventListener("click", plusOperation);


subButton = document.getElementById("subButton");
subOperation = function() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    sub = parseInt(n1) - parseInt(n2);
    result = document.getElementById("result");
    result.innerText = sub;
}

subButton.addEventListener("click", subOperation);

mulButton = document.getElementById("mulButton");
mulOperation = function() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    mul = parseInt(n1) * parseInt(n2);
    result = document.getElementById("result");
    result.innerText = mul;
}

mulButton.addEventListener("click", mulOperation);

divButton = document.getElementById("divButton");
divOperation = function() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    div = parseInt(n1) / parseInt(n2);
    result = document.getElementById("result");
    result.innerText = div;
}

divButton.addEventListener("click", divOperation);







