import "./ExchangeRate.scss";
import pantheon from "../../assets/svg/Pantheon.svg";
import { getUpdateTime } from "../../utils/getUpdateTime.js";
import { useEffect, useState, useRef } from "react";
import { fetchCurrency } from "../../API/api.jsx";

// try {
//   getExchange();
//   setInterval(() => getExchange(), getUpdateTime(1000, 60, 15));
// } catch (error) {
//   console.log(error);
// }

const exchange = [
  { from: "USD", to: "RUB" },
  { from: "EUR", to: "RUB" },
  { from: "CNY", to: "RUB" },
  { from: "TRY", to: "RUB" },
  { from: "CHF", to: "RUB" },
  { from: "JPY", to: "RUB" },
];

const rateTable1 = [
  { index: 1, rate: "USD:", id: "USD" },
  { index: 2, rate: "CNY:", id: "CNY" },
  { index: 3, rate: "CHF:", id: "CHF" },
];

const rateTable2 = [
  { index: 1, rate: "EUR:", id: "EUR" },
  { index: 2, rate: "JPY:", id: "JPY" },
  { index: 3, rate: "TRY:", id: "TRY" },
];

export default function ExchangeRate() {
  useEffect(() => {
    const interval = setInterval(() => console.log("aaaaaa"), getUpdateTime(1000, 60, 15));
    exchange.forEach((element) => {
      // fetchCurrency(element.from, element.to).then((data) => 
      //   (document.getElementById(element.from).innerHTML =
      //     Number(data).toFixed(2)),
      //   (error) => console.log("Rejected: " + error.message)
      // );
    });
    return () => {
      clearInterval(interval)
    };
  }, []);

  return (
    <section className="exchangeRate">
      <div>
        <h3>Exchange rate in internet bank</h3>
        <p className="exchangeRate__currency-p">Currency</p>
        <ul className="exchangeRate__currency-table">
          {rateTable1.map((item) => (
            <div key={item.index}>
              <li className="exchangeRate__currency">{item.rate}</li>
              <li className="exchangeRate__value"  id={item.id}></li>
            </div>
          ))}
        </ul>
        <ul className="exchangeRate__currency-table">
          {rateTable2.map((item) => (
            <div key={item.index}>
              <li className="exchangeRate__currency">{item.rate}</li>
              <li className="exchangeRate__value" id={item.id}></li>
            </div>
          ))}
        </ul>
        <a href="# " className="exchangeRate__courses-a">
          All courses
        </a>
      </div>
      <div className="exchangeRate__container">
        <time className="exchangeRate__time">
          Update every 15 minutes, MSC 09.08.2022
        </time>
        <img src={pantheon} alt="Pantheon" />
      </div>
    </section>
  );
}
