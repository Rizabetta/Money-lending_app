import { useEffect, useState, useRef } from "react";
import { api_home } from "../../../api/home";
import { getUpdateTime } from "../../../utils/getUpdateTime";
import { CardNews } from "../../../components/CardNews/CardNews";
import { checkBtn } from "./buttons";
import { leftBTN, rightBTN } from "./News.const";
import {TCardProps} from "./News.type";
import "./News.scss";

function News() {
  let [arrnews, setArrNews] = useState<TCardProps[] | null>(null);
  const divElement = useRef<HTMLDivElement>(null);
  const [trackWidth, settrackWidth] = useState<number | undefined>(undefined);
  let news = arrnews?.length ?? 20;
  let visibleElements = 1;
  let [position, setposition] = useState(0);
  const track = document.querySelector(".news__track") as HTMLInputElement;
  const gap = 80;
  const cardWidth = 320;
  const move = gap + cardWidth;
  let limit = Number(news - visibleElements) * 400;

  useEffect(() => {
    checkBtn(position, limit, btnLeft, btnRight);
    function handleResize() {
      if (divElement.current) {
        settrackWidth(divElement.current.offsetWidth);
        getTrackWidth();
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    getTrackWidth();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getTrackWidth() {
    limit = Number(news - visibleElements) * 400;
    const positionReset = () => {
      track.style.transform = `translateX(0px)`;
      setposition(0);
      limit = Number(news - visibleElements) * 400;
    };
    if (trackWidth === 1300 || trackWidth === 1160) {
      visibleElements = 3;
      positionReset();
    }
    if (trackWidth === 770) {
      visibleElements = 2;
      positionReset();
    }
    if (trackWidth === 350) {
      visibleElements = 1;
      positionReset();
    }
  }

  function carouselLeftBtn() {
    if (position !== 0) {
      position += move;
      track.style.transform = `translateX(${position}px)`;
    }
    checkBtn(position, limit, btnLeft, btnRight);
  }

  function carouselRightBtn() {
    if (position > -limit) {
      position -= move;
      track.style.transform = `translateX(${position}px)`;
    }
    checkBtn(position, limit, btnLeft, btnRight);
  }

  const btnLeft = useRef<HTMLButtonElement>(null);
  const btnRight = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    renderCart();
    const interval = setInterval(
      () => renderCart(),
      getUpdateTime(1000, 60, 15)
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  async function renderCart() {
    let news = await api_home.fetchNews();
    setArrNews(news);
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
          <div className="news__track" ref={divElement}>
            {arrnews &&
              arrnews.map(({ url, urlToImage, title, description }, key) => (
                <CardNews
                  key={key}
                  url={url}
                  urlToImage={urlToImage}
                  title={title}
                  description={description}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="news__buttons">
        <button
          ref={btnLeft}
          className="news__input-left carouselBtn"
          onClick={carouselLeftBtn}
        >
          {leftBTN}
        </button>
        <button
          ref={btnRight}
          className="news__input-right carouselBtn"
          onClick={carouselRightBtn}
        >
          {rightBTN}
        </button>
      </div>
    </section>
  );
}

export { News };
