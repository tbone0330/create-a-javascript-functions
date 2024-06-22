const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const stringReverse = str => str.split("").reverse().join("");
const isArray = (arr) => Array.isArray(arr);