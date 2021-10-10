//Menampilkan angka saat menekan tombol
const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    });
});

//Menyimpan angka dan operator untuk melakukan kalkulasi
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (Event) => {
        inputOperator(Event.target.value)
    });
});

//Mengaktifkan fungsi kalkulasi
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
};

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
});

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case "-":
            result = prevNumber - currentNumber
            break;
        case "*":
            result = prevNumber * currentNumber
            break;
        case "/":
            result = prevNumber / currentNumber
            break;
        case "%":
            result = prevNumber/ 100
            break;
        default:
            break;
    }
    currentNumber = result
    calculationOperator = ''
};

//Mengatur jalannya tombol AC
const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber);
});

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
};

//Kalkukasi angka desimal
const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (Event) => {
    inputDecimal(Event.target.value)
    updateScreen(currentNumber)
});

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
};

