var arr1 = "john".split('');
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const uniqueArr = (arr) => [...new Set(arr)];
const maxNumber = arr => Math.max(...arr);
const resultingPromises = urls.map((url) => makHttpRequest(url));