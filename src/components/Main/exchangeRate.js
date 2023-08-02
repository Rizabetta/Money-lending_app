import { fetchCurrency } from "../../API/api.js"

const exchange = [
  { from: 'USD', to: 'RUB' },
  { from: 'EUR', to: 'RUB' },
  { from: 'CNY', to: 'RUB' },
  { from: 'TRY', to: 'RUB' },
  { from: 'CHF', to: 'RUB' },
  { from: 'JPY', to: 'RUB' },
]

function getExchange() {
  exchange.forEach(element => {
    fetchCurrency(element.from, element.to).then(data => document.getElementById(element.from).innerHTML = Number(data).toFixed(2));
  });
}

function updateRequest (mseconds, seconds, minutes) {
    getExchange(); 
    setInterval(() => updateRequest(), mseconds * seconds * minutes);
}

updateRequest(1000, 60, 15);