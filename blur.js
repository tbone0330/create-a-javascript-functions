const flattenedArray = arr => [].concat(...arr);
const fullName = name || 'buddy';
const symbolsPath = path.join(buildOutputPath, 'symbols');
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const merge = [...new Set([...a, ...b])];