const goToTop = () => window.scrollTo(0, 0);
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const randomString = () => Math.random().toString(36).slice(2);