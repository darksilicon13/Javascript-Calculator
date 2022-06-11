window.onload = function() {
    // console.log(isOperator('*'));
    let solved = false;
}

function clearDisplay() {
    document.getElementById("equation").innerText = "";
    document.getElementById("number").innerText = "0";
}

function isOperator(char) {
    return (char === '+' || char === '-' || char === '*' || char === '/')
}

function isCleared() {
    return (document.getElementById("equation").innerText === '' && document.getElementById("number").innerText === '0');
}

function add() {
    if(document.getElementById("equation").innerText.indexOf("=") !== -1) {
        let result = document.getElementById('equation').innerText.split('=')[1];
        document.getElementById('equation').innerText = result + '+';
        document.getElementById('number').innerText = '+';
    }
    let str = document.getElementById("equation").innerText;
    if(isOperator(str.charAt(str.length - 1))) {
        if(str.charAt(str.length - 1) === '-' && str.charAt(str.length - 2) === '+') {
            str = str.slice(0, -2);
        } else {
            str = str.slice(0, -1);
        }
        document.getElementById("equation").innerText = str + '+';
        document.getElementById("number").innerText = '+';
        return;
    }
    document.getElementById("number").innerText = '+';
    document.getElementById("equation").innerText += '+';
}
function subtract() {
    if(document.getElementById("equation").innerText.indexOf("=") !== -1) {
        let result = document.getElementById('equation').innerText.split('=')[1];
        document.getElementById('equation').innerText = result + '-';
        document.getElementById('number').innerText = '-';
    }
    let str = document.getElementById("equation").innerText;
    if(isOperator(str.charAt(str.length - 1)) && str[str.length - 1] !== '+') {
        document.getElementById("number").innerText = '-';
        str = str.slice(0, -1);
        document.getElementById("equation").innerText = str + '-';
        return;
    }
    document.getElementById("number").innerText = '-';
    document.getElementById("equation").innerText += '-';
}
function multiply() {
    if(document.getElementById("equation").innerText.indexOf("=") !== -1) {
        let result = document.getElementById('equation').innerText.split('=')[1];
        document.getElementById('equation').innerText = result + '*';
        document.getElementById('number').innerText = 'X';
    }
    let str = document.getElementById("equation").innerText;
    if(isOperator(str.charAt(str.length - 1))) {
        document.getElementById("number").innerText = 'X';
        if(str.charAt(str.length - 1) === '-' && str.charAt(str.length - 2) === '+') {
            str = str.slice(0, -2);
        } else {
            str = str.slice(0, -1);
        }
        document.getElementById("equation").innerText = str + '*';
        document.getElementById("number").innerText = 'X';
        return;
    }
    document.getElementById("number").innerText = '*';
    document.getElementById("equation").innerText += '*';
}
function divide() {
    if(document.getElementById("equation").innerText.indexOf("=") !== -1) {
        let result = document.getElementById('equation').innerText.split('=')[1];
        document.getElementById('equation').innerText = result + '/';
        document.getElementById('number').innerText = '/';
    }
    let str = document.getElementById("equation").innerText;
    if(isOperator(str.charAt(str.length - 1))) {
        if(str.charAt(str.length - 1) === '-' && str.charAt(str.length - 2) === '+') {
            str = str.slice(0, -2);
        } else {
            str = str.slice(0, -1);
        }
        document.getElementById("equation").innerText = str + '/';
        document.getElementById("number").innerText = '/';
        return;
    }
    document.getElementById("number").innerText = '/';
    document.getElementById("equation").innerText += '/';
}

function zero() {
    // when AC has been pushed
    if(isCleared()) {
        document.getElementById("equation").innerText = '0';
        return;
    }
    // when the last button pushed was operator button
    if(isOperator(document.getElementById("number").innerText)) {
        document.getElementById("number").innerText = '0';
        document.getElementById("equation").innerText += '0';
        return;
    }
    // split the numbers by operators and check if the last number is exactly 0 (0.0 not included)
    let temp = document.getElementById("equation").innerText;
    let array = temp.split('+').join(',').split('-').join(',').split('*').join(',').split('/').join(',').split(',');
    if(array[array.length-1] !== '0') {
        document.getElementById("equation").innerText += '0';
        document.getElementById("number").innerText += '0';
    }
}
function one() {
    let str = document.getElementById("equation").innerText;
    // console.log(isCleared());
    if(isOperator(str.charAt(str.length - 1)) || isCleared()) {
        document.getElementById("equation").innerText += '1';
        document.getElementById("number").innerText = '1';
        return;
    }
    if(document.getElementById("number") === '0' && str.charAt(str.length - 1) === '0') {
        document.getElementById("number").innerText = '1';
        str = str.slice(0, -1);
        document.getElementById("equation").innerText = str + '1';
    }
    document.getElementById("equation").innerText += '1';
    document.getElementById("number").innerText += '1';
}
function two() {
    let str = document.getElementById("equation").innerText;
    // console.log(isCleared());
    if(isOperator(str.charAt(str.length - 1)) || isCleared()) {
        document.getElementById("equation").innerText += '2';
        document.getElementById("number").innerText = '2';
        return;
    }
    if(document.getElementById("number") === '0' && str.charAt(str.length - 1) === '0') {
        document.getElementById("number").innerText = '2';
        str = str.slice(0, -1);
        document.getElementById("equation").innerText = str + '2';
    }
    document.getElementById("equation").innerText += '2';
    document.getElementById("number").innerText += '2';
}
function three() {
    let str = document.getElementById("equation").innerText;
    // console.log(isCleared());
    if(isOperator(str.charAt(str.length - 1)) || isCleared()) {
        document.getElementById("equation").innerText += '3';
        document.getElementById("number").innerText = '3';
        return;
    }
    if(document.getElementById("number") === '0' && str.charAt(str.length - 1) === '0') {
        document.getElementById("number").innerText = '3';
        str = str.slice(0, -1);
        document.getElementById("equation").innerText = str + '3';
    }
    document.getElementById("equation").innerText += '3';
    document.getElementById("number").innerText += '3';
}
function four() {
    let str = document.getElementById("equation").innerText;
    // console.log(isCleared());
    if(isOperator(str.charAt(str.length - 1)) || isCleared()) {
        document.getElementById("equation").innerText += '4';
        document.getElementById("number").innerText = '4';
        return;
    }
    if(document.getElementById("number") === '0' && str.charAt(str.length - 1) === '0') {
        document.getElementById("number").innerText = '4';
        str = str.slice(0, -1);
        document.getElementById("equation").innerText = str + '4';
    }
    document.getElementById("equation").innerText += '4';
    document.getElementById("number").innerText += '4';
}
function five() {
    let str = document.getElementById("equation").innerText;
    // console.log(isCleared());
    if(isOperator(str.charAt(str.length - 1)) || isCleared()) {
        document.getElementById("equation").innerText += '5';
        document.getElementById("number").innerText = '5';
        return;
    }
    if(document.getElementById("number") === '0' && str.charAt(str.length - 1) === '0') {
        document.getElementById("number").innerText = '5';
        str = str.slice(0, -1);
        document.getElementById("equation").innerText = str + '5';
    }
    document.getElementById("equation").innerText += '5';
    document.getElementById("number").innerText += '5';
}
function six() {
    let str = document.getElementById("equation").innerText;
    // console.log(isCleared());
    if(isOperator(str.charAt(str.length - 1)) || isCleared()) {
        document.getElementById("equation").innerText += '6';
        document.getElementById("number").innerText = '6';
        return;
    }
    if(document.getElementById("number") === '0' && str.charAt(str.length - 1) === '0') {
        document.getElementById("number").innerText = '6';
        str = str.slice(0, -1);
        document.getElementById("equation").innerText = str + '6';
    }
    document.getElementById("equation").innerText += '6';
    document.getElementById("number").innerText += '6';
}
function seven() {
    let str = document.getElementById("equation").innerText;
    // console.log(isCleared());
    if(isOperator(str.charAt(str.length - 1)) || isCleared()) {
        document.getElementById("equation").innerText += '7';
        document.getElementById("number").innerText = '7';
        return;
    }
    if(document.getElementById("number") === '0' && str.charAt(str.length - 1) === '0') {
        document.getElementById("number").innerText = '7';
        str = str.slice(0, -1);
        document.getElementById("equation").innerText = str + '7';
    }
    document.getElementById("equation").innerText += '7';
    document.getElementById("number").innerText += '7';
}
function eight() {
    let str = document.getElementById("equation").innerText;
    // console.log(isCleared());
    if(isOperator(str.charAt(str.length - 1)) || isCleared()) {
        document.getElementById("equation").innerText += '8';
        document.getElementById("number").innerText = '8';
        return;
    }
    if(document.getElementById("number") === '0' && str.charAt(str.length - 1) === '0') {
        document.getElementById("number").innerText = '8';
        str = str.slice(0, -1);
        document.getElementById("equation").innerText = str + '8';
    }
    document.getElementById("equation").innerText += '8';
    document.getElementById("number").innerText += '8';
}
function nine() {
    let str = document.getElementById("equation").innerText;
    // console.log(isCleared());
    if(isOperator(str.charAt(str.length - 1)) || isCleared()) {
        document.getElementById("equation").innerText += '9';
        document.getElementById("number").innerText = '9';
        return;
    }
    if(document.getElementById("number") === '0' && str.charAt(str.length - 1) === '0') {
        document.getElementById("number").innerText = '9';
        str = str.slice(0, -1);
        document.getElementById("equation").innerText = str + '9';
    }
    document.getElementById("equation").innerText += '9';
    document.getElementById("number").innerText += '9';
}
function decimals() {
    if(document.getElementById("equation").innerText.indexOf("=") !== -1) {
        document.getElementById('number').innerText = "0.";
        document.getElementById('equation').innerText = "0.";
    }
    // split the equation string into operators and numbers
    let temp = document.getElementById("equation").innerText;
    let array = temp.split('+').join(',').split('-').join(',').split('*').join(',').split('/').join(',').split(',');
    if(array[array.length - 1].indexOf('.') !== -1) {
        return;
    }
    if(isOperator(temp.charAt(temp.length - 1))) {
        document.getElementById('number').innerText += "0.";
        document.getElementById('equation').innerText += "0.";
        return;
    }
    document.getElementById("number").innerText += '.';
    document.getElementById("equation").innerText += '.';
}

function equals() { 
    let equation = document.getElementById("equation").innerText;
    if(isOperator(equation[equation.length - 1])) {
        document.getElementById("equation").innerText = equation.slice(0, -1);
    }
    let result = eval(document.getElementById("equation").innerText);
    document.getElementById("equation").innerText += "=" + result;
    document.getElementById("number").innerText = result;
}