const reversedString = str => str.split('').reverse().join('');
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};