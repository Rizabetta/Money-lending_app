let key = new XMLHttpRequest();
key.open('GET', "../src/keys/rapidAPI.txt", false);
key.send();

setInterval(gerExchange(), 900000);
function gerExchange() {
    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
        }
    });

    let exchange = ['USD', 'EUR', 'CNY', 'TRY', 'CHF', 'JPY'];
    exchange.forEach(item => {
        xhr.open('GET', `https://currency-exchange.p.rapidapi.com/exchange?from=${item}&to=RUB&q=1`, false);
        xhr.setRequestHeader('X-RapidAPI-Key', `${key.responseText}`);
        xhr.setRequestHeader('X-RapidAPI-Host', 'currency-exchange.p.rapidapi.com');
        xhr.send();
        document.getElementById(item).innerHTML = Number(xhr.responseText).toFixed(2);
    })
}