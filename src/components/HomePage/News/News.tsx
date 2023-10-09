import { useEffect, useState, useRef, useMemo } from "react";
import { api_home } from "../../../api/home";
import { getUpdateTime } from "../../../utils/getUpdateTime";
import { CardNews } from "./CardNews";
import { leftBTN, rightBTN } from "./News.const";
import { TCardProps } from "./News.type";
import "./News.scss";

function News() {
  let [arrnews, setArrNews] = useState<TCardProps[] | null>(null);
  const divElement = useRef<HTMLDivElement>(null);
  const [trackWidth, settrackWidth] = useState<number | undefined>(undefined);
  let news = arrnews?.length ?? 20;
  let [position, setPosition] = useState(0);
  const track = document.querySelector(".news__track") as HTMLInputElement;
  const gap = 80;
  const cardWidth = 320;
  const move = gap + cardWidth;
  const [visibleElements, setVisibleElements] = useState(1);
  let limit = useMemo(
    () => Number(news - visibleElements) * 400,
    [news, visibleElements]
  );
  console.log(position === -limit);

  useEffect(() => {
    function getTrackWidth() {
      const positionReset = () => {
        if (track) track.style.transform = `translateX(0px)`;
        setPosition(0);
      };
      if (trackWidth === 1300 || trackWidth === 1160) {
        setVisibleElements(3);
      }
      if (trackWidth === 770) {
        setVisibleElements(2);
      }
      if (trackWidth === 350) {
        setVisibleElements(1);
      }
      positionReset();
    }
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
  }, [limit, position, trackWidth, track?.style, track]);

  function carouselLeftBtn() {
    if (position !== 0) {
      setPosition((prev) => prev + move);
      track.style.transform = `translateX(${position}px)`;
    }
  }

  function carouselRightBtn() {
    console.log(position);
    setPosition(position - move);
    track.style.transform = `translateX(${position}px)`;
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
          disabled={position === 0}
        >
          {leftBTN}
        </button>
        <button
          ref={btnRight}
          className="news__input-right carouselBtn"
          onClick={carouselRightBtn}
          disabled={position === -limit}
        >
          {rightBTN}
        </button>
      </div>
    </section>
  );
}

export { News };
