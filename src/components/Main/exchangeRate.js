import { fetchCurrency } from "../../API/api.js"
import { getUpdateTime } from "../../utils/getUpdateTime.js"

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
    fetchCurrency(element.from, element.to).then(data => document.getElementById(element.from).innerHTML = Number(data).toFixed(2),
      error => console.log("Rejected: " + error.message));
  });
}

try {
  getExchange();
  setInterval(() => getExchange(), getUpdateTime(1000, 60, 15));
} catch (error) {
  console.log(error);
}