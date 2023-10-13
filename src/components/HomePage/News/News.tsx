import { useEffect, useState, useRef, useMemo } from "react";
import { api_home } from "../../../api/home";
import { getUpdateTime } from "../../../utils/getUpdateTime";
import { CardNews } from "./CardNews";
import { TCardProps } from "./News.type";
import { LeftArrowIcon } from "../../Icons";
import RightArrowIcon from "../../Icons/RightArrowIcon";
import "./News.scss";

function News() {
  let [arrnews, setArrNews] = useState<TCardProps[] | null>(null);
  const divElement = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState<number | undefined>(1);
  let news = useMemo(() => (arrnews ?? []).length ?? 20, [arrnews]);
  let [position, setPosition] = useState(0);
  const track = document.querySelector(".news__track") as HTMLInputElement;
  const [sliderProps] = useState({
    gap: 80,
    cardWidth: 320,
  });
  const move = useMemo(
    () => sliderProps.gap + sliderProps.cardWidth,
    [sliderProps]
  );
  const [visibleElements, setVisibleElements] = useState(1);
  let limit = useMemo(
    () => Number(news - visibleElements) * 400,
    [news, visibleElements]
  );

  useEffect(() => {
    function getTrackWidth() {
      if (track) track.style.transform = `translateX(0px)`;
      setPosition(0);
    }
    if (trackWidth === 1300 || trackWidth === 1160) {
      setVisibleElements(3);
    }
    if (trackWidth === 770) {
      setVisibleElements(2);
    }
    if (trackWidth === 350) {
      setVisibleElements(1);
    }
    function handleResize() {
      if (divElement.current) {
        setTrackWidth(divElement.current.offsetWidth);
        getTrackWidth();
      }
    }
    window.addEventListener("resize", () => {
      handleResize();
      getTrackWidth();
    });

    return () => {
      window.removeEventListener("resize", () => {
        handleResize();
        getTrackWidth();
      });
    };
  }, [limit, position, trackWidth, track?.style, track]);

  useEffect(() => {
    setTrackWidth(document.querySelector(".news__track")?.clientWidth);
  }, []);
  function carouselLeftBtn() {
    setPosition((prev) => prev + move);
  }

  function carouselRightBtn() {
    setPosition(position - move);
  }

  useEffect(() => {
    if (track) track.style.transform = `translateX(${position}px)`;
  }, [position, track]);

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
          className="news__input-left carouselBtn"
          onClick={carouselLeftBtn}
          disabled={position === 0}
        >
          <LeftArrowIcon />
        </button>
        <button
          className="news__input-right carouselBtn"
          onClick={carouselRightBtn}
          disabled={position <= -limit}
        >
          <RightArrowIcon />
        </button>
      </div>
    </section>
  );
}

export { News };
