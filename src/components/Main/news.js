import { fetchNewsKey } from "../../API/api.js";

let renderArrNews = [];
let limit;
let news = 0;
let visibleElements = 1;
let newsContainerWidth =
  document.getElementsByClassName("news__track")[0].clientWidth;
let position = 0;
const gap = 80;
const cardkWidth = 320;
const move = gap + cardkWidth;
const track = document.querySelector(".news__track");
const defaultImage = "../../public/assets/png/news_3.png";

function updateRequest(mseconds, seconds, minutes) {
  fetchNewsKey("../src/keys/newsAPI.txt").then((response) =>
    response.json().then((data) => {
      renderArrNews = data.articles;
      render();
    })
  );
  setInterval(() => updateRequest(), mseconds * seconds * minutes);
}

updateRequest(1000, 60, 15);

window.addEventListener(
  "resize",
  function () {
    newsContainerWidth =
      document.getElementsByClassName("news__track")[0].clientWidth;
    getTrackWidth();
  },
  true
);

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

function render(arrNews = renderArrNews) {
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
    console.log(!img);
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
  console.log(news);
  getTrackWidth();
}

const hover = document.querySelectorAll(".carouselBtn");
let currentImage;
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

for (let i = 0; i < hover.length; i++) {
  hover[i].addEventListener("mouseover", function () {
    currentImage = this.src;
    this.src = "../public/assets/svg/ButtonR.svg";
  });
  hover[i].addEventListener("mouseout", function () {
    this.src = currentImage;
  });
}

function checkBtn() {
  if (position === 0) {
    btnLeft.style.cursor = "not-allowed";
    btnLeft.disabled = true;
    btnLeft.classList.remove("news__input-left");
    btnLeft.src = "../public/assets/svg/ButtonL.svg";
  } else {
    btnLeft.disabled = false;
    btnLeft.style.cursor = "pointer";
    btnLeft.classList.add("news__input-left");
    btnLeft.style.pointerEvents = "auto";
  }
}

checkBtn();
limit = Number(news - visibleElements) * 400;
