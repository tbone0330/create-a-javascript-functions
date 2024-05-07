const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const isEven = (num) => num % 2 === 0;