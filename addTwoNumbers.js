const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const flattenedArray = arr => [].concat(...arr);
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;