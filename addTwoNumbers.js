const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const goToTop = () => window.scrollTo(0, 0);