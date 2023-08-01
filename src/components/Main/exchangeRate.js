import { fetchCurrency } from "../../API/api.js"

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

function update() {
  exchange.forEach(element => {
    fetchCurrency(element.from, element.to).then(data => document.getElementById(element.from).innerHTML = Number(data).toFixed(2));
  });
  setInterval(() => update(), updateRequest)
}

update();