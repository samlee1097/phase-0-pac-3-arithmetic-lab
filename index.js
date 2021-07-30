function add() {
}

function subtract() {
}

function multiply() {
}

function divide() {
}

function add(a, b) { //Function takes two entries to make sum
    return a + b;
}

function subtract(a, b) {//Function takes two entries to make difference
    return a - b;
}

function multiply(a, b) {//Function takes two entries to make product
    return a * b;
}

function divide(a, b) { //Function takes two entries to make quotient
    return a / b;
}

function increment(n) { //Function takes number and adds 1
    return n + 1;
}

function decrement(n) { //Function takes number and subtracts 1
    return n - 1;
}

function makeInt(n){
    return parseInt(n, 10); //parseInt(n, base) default is usually base 10
}

function preserveDecimal(n){
    return parseFloat(n); //parseFloat(n) will preserve decimal places automatically
}