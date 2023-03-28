let capital = ['A', 'C', 'E', 'G', 'I', 'K', 'M', 'O', 'Q', 'S', 'U', 'W', 'Y'];
let lower = ['b', 'd', 'f', 'h', 'j', 'l', 'n', 'p', 'r', 't', 'v', 'x', 'z'];
let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let symbol = ['!', '@', '#', '%', '^', '&', '-', '+', '/', '>', '<'];
let upperE1 = document.getElementById('capital');
let lowerE1 = document.getElementById('small');
let numberE1 = document.getElementById('num');
let symbolE1 = document.getElementById('symbol');
let display = document.getElementById('display');
let countNum = document.querySelector('.count');
let sliderE1 = document.getElementById('slider');
let btn = document.getElementById('btn');
let password;
sliderE1.addEventListener('change', function (e) {
    let rangeValue = e.target.value;
    countNum.innerHTML = rangeValue;

})
function capitalPassword(range) {
    password = '';
    for (let i = 0; i < range; i++) {
        let random = Math.round(Math.random() * (capital.length - 1));

        password += capital[random];
    }
    return password;
}
function capitalAndLower(range) {
    password = '';
    let arr = capital.concat(lower);

    for (let i = 0; i < range; i++) {
        let random = Math.round(Math.random() * (arr.length - 1));

        password += arr[random];
    }
    return password;
}
function capitalAndNum(range) {
    password = '';
    let arr = capital.concat(number);
    for (let i = 0; i < range; i++) {
        let random = Math.round(Math.random() * (arr.length - 1));
        password += arr[random];
    }
    return password;

}
function capitalAndSymbol(range) {
    password = '';
    let arr = capital.concat(symbol);
    for (let i = 0; i < range; i++) {
        let random = Math.round(Math.random() * (arr.length - 1));
        password += arr[random];
    }
    return password;
}
function lowerAndNumber(range) {
    password = '';
    let arr = lower.concat(number);
    for (let i = 0; i < range; i++) {
        let random = Math.round(Math.random() * (arr.length - 1));
        password += arr[random];
    }
    return password;
}
function lowerAndSymbol(range) {
    password = '';
    let arr = lower.concat(symbol);
    for (let i = 0; i < range; i++) {
        let random = Math.round(Math.random() * (arr.length - 1));
        password += arr[random];
    }
    return password;
}
function numbersAndSymbol(range) {
    password = '';
    let arr = number.concat(symbol);
    for (let i = 0; i < range; i++) {
        let random = Math.round(Math.random() * (arr.length - 1));
        password += arr[random];
    }
    return password;
}
function capitalLowerAndNumber(range) {
    password = '';
    let arr = capital.concat(lower, number);
    for (let i = 0; i < range; i++) {
        let random = Math.round(Math.random() * (arr.length - 1));
        password += arr[random];
    }
    return password;
}
function capitalLowerAndSymbol(range) {
    password = '';
    let arr = capital.concat(lower, symbol);
    for (let i = 0; i < range; i++) {
        let random = Math.round(Math.random() * (arr.length - 1));
        password += arr[random];
    }
    return password;
}
function capitalNumberAndSymbol(range) {
    password = '';
    let arr = capital.concat(number, symbol);
    for (let i = 0; i < range; i++) {
        let random = Math.round(Math.random() * (arr.length - 1));
        password += arr[random];
    }
    return password;
}
function lowerNumberAndSymbol(range) {
    password = '';
    let arr = lower.concat(number, symbol);
    for (let i = 0; i < range; i++) {
        let random = Math.round(Math.random() * (arr.length - 1));
        password += arr[random];
    }
    return password;
}
function capitalLowerNumberAndSymbol(range) {
    password = '';
    let arr = capital.concat(lower, number, symbol);
    for (let i = 0; i < range; i++) {
        let random = Math.round(Math.random() * (arr.length - 1));
        password += arr[random];
    }
    return password;
}
let display_pass;
document.getElementById('form-submit').addEventListener('submit', function (e) {
    e.preventDefault();
    let rangeValue = e.target.elements.range.value;
    rangeValue = Number.parseInt(rangeValue);

    if (upperE1.checked) {
        display_pass = capitalPassword(rangeValue);
        display.value = display_pass;
    }
    if (upperE1.checked && lowerE1.checked) {

        display_pass = capitalAndLower(rangeValue);
        display.value = display_pass;
    }
    if (upperE1.checked && numberE1.checked) {
        display_pass = capitalAndNum(rangeValue);
        display.value = display_pass;
    }
    if (upperE1.checked && symbolE1.checked) {
        display_pass = capitalAndSymbol(rangeValue);
        display.value = display_pass;
    }
    if (lowerE1.checked && numberE1.checked) {
        display_pass = lowerAndNumber(rangeValue);
        display.value = display_pass;
    }
    if (lowerE1.checked && symbolE1.checked) {
        display_pass = lowerAndSymbol(rangeValue);
        display.value = display_pass;
    }
    if (numberE1.checked && symbolE1.checked) {
        display_pass = numbersAndSymbol(rangeValue);
        display.value = display_pass;
    }
    if (lowerE1.checked && upperE1.checked && numberE1.checked) {
        display_pass = capitalLowerAndNumber(rangeValue);
        display.value = display_pass;
    }
    if (lowerE1.checked && upperE1.checked && symbolE1.checked) {
        display_pass = capitalLowerAndSymbol(rangeValue);
        display.value = display_pass;
    }
    if (upperE1.checked && numberE1.checked && symbolE1.checked) {
        display_pass = capitalNumberAndSymbol(rangeValue);
        display.value = display_pass;
    }
    if (lowerE1.checked && numberE1.checked && symbolE1.checked) {
        display_pass = lowerNumberAndSymbol(rangeValue);
        display.value = display_pass;
    }
    if (upperE1.checked && lowerE1.checked && numberE1.checked && symbolE1.checked) {
        display_pass = capitalLowerNumberAndSymbol(rangeValue);
        display.value = display_pass;
    }
    
})
function copyText() {    
    display.select();
    document.execCommand("copy");
    // alert("Text copied to clipboard");
  }
  document.querySelector('.fa-copy').addEventListener('click', function(){
    copyText();
  })
  






