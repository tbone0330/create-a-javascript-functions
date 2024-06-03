const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
var arr2 = arr1.reverse();
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));