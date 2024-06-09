const goToTop = () => window.scrollTo(0, 0);
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));