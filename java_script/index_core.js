let first_number = '';
let second_number = '';
let sign = '';
let finish = false;
const out = document.querySelector('#res');

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '×', '÷'];
const other = ['+/-', '%'];

document.querySelector('.buttons').addEventListener('click', function (event) {
    if (!event.target.classList.contains('btn')) return;
    const key = event.target.value;

    if (event.target.classList.contains('ac')) {
            first_number = '';
            second_number = '';
            sign = '';
            finish = false;
            out.textContent = 0;
    };

    if (digits.includes(key)) {
        if (second_number === '' && sign === '') {
            first_number += key;
            out.textContent = first_number;
        } else if (first_number != '' && second_number != '' && finish) {
            b = key;
            finish = false;
            out.textContent = second_number;
        } else {
            second_number += key;
            out.textContent = second_number;
        }
        return;
    };

    if (other.includes(key)) {
        if (key === '%') {
            first_number /= 100;
            out.textContent = first_number;
        } else if (key === '+/-') {
            first_number += '-';
            out.textContent = first_number;
        }
    }

    if (action.includes(key)) {
        sign = key;
    };

    if (key === '=') {
        if (second_number === '') second_number = first_number;
        switch (sign) {
            case '+':
                first_number = Number(first_number) + Number(second_number);
                break;
            case '-':
                first_number = Number(first_number) - Number(second_number);
                break;
            case '×':
                first_number = Number(first_number) * Number(second_number);
                break;
            case '÷':
                if (second_number === '0') {
                    out.textContent = 'Error 152';
                    first_number = '';
                    second_number = '';
                    sign = '';
                    return;
                }
                first_number = Number(first_number) / Number(second_number);
                break;
            default: 
                out.textContent = 'Error 363';
        }
        finish = true;
        out.textContent = first_number;
    }
});