const apmRootPath = path.join(repositoryRootPath, 'apm');
const isEven = (num) => num % 2 === 0;
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';