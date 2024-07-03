const timeFromDate = date => date.toTimeString().slice(0, 8);
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);