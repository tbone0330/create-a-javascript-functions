const isEmptyObject = obj => Object.keys(obj).length === 0;
const merge = [...new Set([...a, ...b])];