let display = document.querySelector('.show');

let mainFunc = document.querySelectorAll('.btn');
mainFunc.forEach(function(button) {
    button.addEventListener("click", function calculator() {
         display.value+=button.innerHTML;
    });
});

let clearDisplay = document.getElementById('clear');
clearDisplay.addEventListener("click", function() {
     display.value = "";
});

let deleteCharac = document.getElementById('backSpace');
deleteCharac.addEventListener("click", function(){
    display.value = display.value.slice(0, -1);
});



let total = document.getElementById('equal');
total.addEventListener("click", function(){
   let operator = display.value;
   operator=operator.replaceAll("➕", "+");
   operator = operator.replaceAll("➖", "-");
   operator = operator.replaceAll("✖️","*");
   operator = operator.replaceAll("➗","/");
   operator = operator.replaceAll("％", "%");

display.value=eval(operator);
// display.value=eval(display.value);
});

let calculator = document.getElementById('calculator');
calculator.addEventListener("click", function(){
    let input = " ";
let operator = " ";
let secInput = display.value;

if (operator==="+") {
    result = (input + secInput);
    
    
}
else if (operator==="-") {
 result = (input - secInput);

}
else if (operator==="*") {
    result = (input * secInput);
    
}
else if (operator==="/") {
   result = (input / secInput);
    
}
else if (operator==="%") {
    result = (input % secInput);   
}

else if (operator==="+/-"){
    result = display.value = -display.value;
}



else {
    result= ("invalid operator");
}



});