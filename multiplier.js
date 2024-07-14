const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const isEmptyObject = obj => Object.keys(obj).length === 0;