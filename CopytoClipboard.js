const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const result = await makeHttpRequest(url);