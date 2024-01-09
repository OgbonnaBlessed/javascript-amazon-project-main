import {formatCurrency} from "../scripts/utils/money.js";

console.log('Test suite: formatCurrency')

console.log('Converts cents to dollars.')
if (formatCurrency(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('This code applies to 0.')
if (formatCurrency(0) === '0.00') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('This code rounds up numbers.')

if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('This code rounds down numbers.')

if (formatCurrency(2000.4) === '20.00') {
    console.log('passed');
} else {
    console.log('failed');
}