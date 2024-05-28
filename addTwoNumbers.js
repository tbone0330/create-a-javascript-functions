const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const repositoryRootPath = path.resolve(__dirname, '..');