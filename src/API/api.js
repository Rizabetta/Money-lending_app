function fetchCurrency(from, to) {
    const url = `https://currency-exchange.p.rapidapi.com/exchange?from=${from}&to=${to}&q=1.0`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '29195502fbmsh29ef30de2b5d032p1b9633jsn9a396d0b7e87',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
    };
    return fetch(url, options).then((response) => response.text());
}

function fetchNewsKey(url) {
    let response = fetch(url).then((response) => response.text())
        .then(data =>
            fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2f70bdb910e145a69b9f60589239e996`));
    return response;
}

export { fetchCurrency, fetchNewsKey }