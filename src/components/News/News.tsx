import { useEffect, useState, useRef } from "react";
import { fetchNewsKey } from "../../API/api";
import { getUpdateTime } from "../../utils/getUpdateTime";
import CardNews from "../CardNews/CardNews";

const leftBTN = (
  <svg
    width="25"
    height="26"
    viewBox="0 0 25 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="leftSVG"
      d="M25 17H9.84211V24.3914C9.84211 24.5845 9.59562 24.6655 9.48109 24.5101L1 13L9.48109 1.48994C9.59562 1.33452 9.84211 1.41552 9.84211 1.60858V9H25"
      stroke="#222222"
    />
  </svg>
);

const rightBTN = (
  <svg
    width="25"
    height="26"
    viewBox="0 0 25 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 9H15.1579V1.60858C15.1579 1.41552 15.4044 1.33452 15.5189 1.48994L24 13L15.5189 24.5101C15.4044 24.6655 15.1579 24.5845 15.1579 24.3914V17H0"
      stroke="white"
    />
  </svg>
);

interface CardProps {
  url: string;
  urlToImage: string;
  title: string;
  description: string;
}

export default function News() {
  const newValue: CardProps[] = [];
  let [arrnews, setArrNews] = useState<CardProps[] | null>(null);

  useEffect(() => {
    const interval = setInterval(
      () => console.log("aaaaaa"),
      getUpdateTime(1000, 60, 15)
    );
    renderCart();

    return () => {
      clearInterval(interval);
    };
  }, []);

  async function renderCart() {
    let response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2f70bdb910e145a69b9f60589239e996"
    );
    let news = await response.json();
    for (let element of news.articles) {
      newValue.push({
        url: element.url,
        urlToImage: element,
        title: element.title,
        description: element.description,
      });
      setArrNews([...newValue]);
    }
  }
  
  return (
    <section className="news">
      <h3 className="heading">Current news from the world of finance</h3>
      <p className="paragraph">
        We update the news feed every 15 minutes. You can learn more by clicking
        on the news you are interestedin.
      </p>
      <div className="news__wrapper">
        <div className="news__container">
          <div className="news__track">
            {arrnews &&
              arrnews.map((item, key) => (
                <CardNews key={key}
                  url={item.url}
                  urlToImage={item.urlToImage}
                  title={item.title}
                  description={item.description}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="news__buttons">
        <button className="news__input-left carouselBtn">{leftBTN}</button>
        <button className="news__input-right carouselBtn">{rightBTN}</button>
      </div>
    </section>
  );
}
