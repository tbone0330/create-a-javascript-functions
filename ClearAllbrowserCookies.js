const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const fullName = name || 'buddy';
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();