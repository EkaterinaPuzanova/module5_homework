let value = +prompt("Введите значени");

if ((typeof value === 'number') && !isNaN(value)) {
    (value % 2 === 0) ? console.log("Введено четное число") : console.log("Введено нечетное число");
} else {
    console.log("Упс, кажется, вы ошиблись");
}