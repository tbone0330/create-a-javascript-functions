const isTabInView = () => !document.hidden;
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);