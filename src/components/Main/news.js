import { fetchNewsKey } from "../../API/api.js";
import { getUpdateTime } from "../../utils/getUpdateTime.js"

let renderArrNews = [];
let limit;
let news = 0;
let visibleElements = 1;
let newsContainerWidth =
  document.getElementsByClassName("news__track")[0].clientWidth;
let position = 0;
const gap = 80;
const cardWidth = 320;
const move = gap + cardWidth;
const track = document.querySelector(".news__track");
const defaultImage = "../../public/assets/png/news_3.png";

function updateRequest() {
  fetchNewsKey("../src/keys/newsAPI.txt").then((response) =>
    response.json().then((data) => {
      renderArrNews = data.articles;
      renderNewsItem();
    }), error => console.log("Rejected: " + error.message)
  );
  setInterval(() => updateRequest(), getUpdateTime (1000, 60, 15));
}

try {
  updateRequest();
} catch (error) {
  console.log(error);
}

function calcTrackWidth() {
  window.addEventListener(
    "resize",
    function () {
      newsContainerWidth = document.getElementsByClassName("news__track")[0].clientWidth;
      getTrackWidth();
    },
    true
  );
}

calcTrackWidth();

function getTrackWidth(trackWidth = newsContainerWidth) {
  limit = Number(news - visibleElements) * 400;
  const positionReset = () => {
    track.style.transform = `translateX(0px)`;
    position = 0;
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

function renderNewsItem(arrNews = renderArrNews) {
  document.getElementsByClassName("news__track")[0].innerHTML = "";

  for (let news of arrNews) {
    let div = document.createElement("div");
    div.className = "news__card";
    let newsContainer = document.querySelector(".news__track");
    newsContainer.append(div);

    let a = document.createElement("a");
    a.href = news.url;
    div.append(a);

    let img = document.createElement("img");
    const totalSrc = news.urlToImage ?? defaultImage;
    img.src = totalSrc;
    img.className = "card__image";
    img.onerror = () => {
      img.src = defaultImage;
    };
    a.append(img);

    let title = document.createElement("h4");
    title.innerHTML = news.title;
    title.className = "card__h4";
    a.append(title);

    let description = document.createElement("p");
    const totalText = news.description ?? news.title;
    description.innerHTML = totalText;
    description.className = "card__description";
    a.append(description);
  }
  news = arrNews.length;
  getTrackWidth();
}

const btnLeft = document.getElementsByClassName("news__input-left")[0];
const btnRight = document.getElementsByClassName("news__input-right")[0];

btnLeft.addEventListener("click", carouselLeftBtn);
btnRight.addEventListener("click", carouselRightBtn);

function carouselLeftBtn() {
  if (position !== 0) {
    position += move;
    track.style.transform = `translateX(${position}px)`;
  }
  checkBtn();
}

function carouselRightBtn() {
  if (position > -limit) {
    position -= move;
    track.style.transform = `translateX(${position}px)`;
  }
  checkBtn();
}

function checkBtn() {
  if (position === 0) {
    btnLeft.classList.add("disabled");
  } else {
    btnLeft.classList.remove("disabled");
  }
  if (position === -limit) {
    btnRight.classList.add("disabled");
  } else {
    btnRight.classList.remove("disabled");
  }
}

checkBtn();
limit = Number(news - visibleElements) * 400;
