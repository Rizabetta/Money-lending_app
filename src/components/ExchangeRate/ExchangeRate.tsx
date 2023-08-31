import "./ExchangeRate.scss";
import pantheon from "../../assets/svg/Pantheon.svg";
import { getUpdateTime } from "../../utils/getUpdateTime";
import { useEffect, useState } from "react";
import { api_home } from "../../API/home";
import { exchange, rateTable1, rateTable2 } from "./rateFromTo";

type TValue = {
  value: number | string;
  id: string;
};

function ExchangeRate() {
  const [value, setValue] = useState<TValue[] | null>(null);
  useEffect(() => {
    updateRate();
    const interval = setInterval(
      () => updateRate(),
      getUpdateTime(1000, 60, 15)
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  function updateRate() {
    const newValue: TValue[] = [];
    exchange.forEach((element) => {
      api_home.fetchCurrency(element.from, element.to)
        .then((data) => {
          const currentDate = Number(data);
          if (!Number.isNaN(currentDate)) {
            newValue.push({
              id: element.from,
              value: Number(data),
            });
          }
          setValue([...newValue]);
        })
        .catch((error) => {
          console.error("Rejected: " + error.message);
        });
    });
  }

  return (
    <section className="exchangeRate">
      <div>
        <h3>Exchange rate in internet bank</h3>
        <p className="exchangeRate__currency-p">Currency</p>
        <ul className="exchangeRate__currency-table">
          {value &&
            rateTable1.map((item, key) => (
              <div key={key}>
                <li className="exchangeRate__currency">{item.rate}</li>
                <li className="exchangeRate__value" id={item.id}>
                  {Number(value.find((i) => i.id === item.id)?.value)?.toFixed(
                    2
                  )}
                </li>
              </div>
            ))}
        </ul>
        <ul className="exchangeRate__currency-table">
          {value &&
            rateTable2.map((item, key) => (
              <div key={key}>
                <li className="exchangeRate__currency">{item.rate}</li>
                <li className="exchangeRate__value" id={item.id}>
                  {Number(value.find((i) => i.id === item.id)?.value)?.toFixed(
                    2
                  )}
                </li>
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

export { ExchangeRate };
