let myMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук", 50],
    ['1', 'str'],
    [1, 'num'],
    [true, 'bool']    
]);

myMap.forEach((value, key) => {
    console.log(`Ключ - ${key}, значение - ${value}`);
});