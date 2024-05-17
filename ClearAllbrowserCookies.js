const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const getRandomBoolean = () => Math.random() >= 0.5;