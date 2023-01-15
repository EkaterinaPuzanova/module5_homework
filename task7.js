let arr;

let numberEven = 0;
let numberOdd = 0;
let numberZero = 0;

arr.forEach(element => {
    if ((typeof element === "number") && !isNaN(element)) {
        if (element === 0) {
            numberZero += 1;
        } else {
            (element % 2 === 0) ? numberEven += 1 : numberOdd += 1;
        }
    }
});

const ANSWER = `Количество чётных элементов в массиве ${numberEven}, нечётных элементов ${numberOdd}`;
arr.includes(0) ? console.log(ANSWER + `, нулевых ${numberZero}`) : console.log(ANSWER);