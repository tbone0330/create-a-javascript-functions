const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const merge = (a, b) => [...a, ...b];