// Question: Creating a function convert the roman number into the integer numbers. 

function romanToNumber(roman) {
    const numeralValues = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;
    let current, currentValue, next, nextValue;

    for (let i = 0; i < roman.length; i++) {
        current = roman[i];
        currentValue = numeralValues[current];
        next = roman[i + 1];
        nextValue = numeralValues[next];

        if (currentValue < nextValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
    }

    return total;
}
