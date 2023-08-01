const mseconds = 1000;
const seconds = 60;
const minutes = 15;
const updateRequest = mseconds * seconds * minutes;

const exchange = [
  { from: 'USD', to: 'RUB' },
  { from: 'EUR', to: 'RUB' },
  { from: 'CNY', to: 'RUB' },
  { from: 'TRY', to: 'RUB' },
  { from: 'CHF', to: 'RUB' },
  { from: 'JPY', to: 'RUB' },
]

function fetchCurrency(from, to) {
  const url = `https://currency-exchange.p.rapidapi.com/exchange?from=${from}&to=${to}&q=1.0`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '29195502fbmsh29ef30de2b5d032p1b9633jsn9a396d0b7e87',
      'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
  };
  const response = fetch(url, options).then((response) =>  response.text()).then(data => document.getElementById(from).innerHTML = Number(data).toFixed(2));
}

function  update() {
  exchange.forEach(element => {
    fetchCurrency(element.from, element.to);
  });
  setInterval(()=>update(),updateRequest)
}

update();