let newsKey = new XMLHttpRequest();
newsKey.open("GET", "../src/keys/newsAPI.txt", false);
newsKey.send();
let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${newsKey.responseText}`;
let req = new Request(url);

let renderArrNews = [];
let limit;
let news = 0;
let visibleElements = 1;
let newsContainerWidth =
    document.getElementsByClassName("news__track")[0].clientWidth;
let position = 0;
let gap = 80;
let cardkWidth = 320;
let move = gap + cardkWidth;
let track = document.querySelector(".news__track");

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
        img.src = news.urlToImage;
        img.className = "card__image";
        img.onerror = () => {
            renderArrNews = renderArrNews.filter(
                (item) => item.urlToImage !== news.urlToImage
            );
            news--;
            render();
        };
        a.append(img);

        let title = document.createElement("h4");
        title.innerHTML = news.title;
        title.className = "card__h4";
        a.append(title);

        let description = document.createElement("p");
        description.innerHTML = news.description;
        description.className = "card__description";
        a.append(description);
    }
    news = arrNews.length;
    getTrackWidth();
}

function fetchNews() { }
fetch(req)
    .then((response) => response.json())
    .then((data) => {
        const { articles } = data;
        for (const article of articles) {
            if (article.urlToImage) {
                renderArrNews.push(article);
            }
        }
        render();
    });

function carouselLeftBtn() {
    if (position !== 0) {
        position += move;
        track.style.transform = `translateX(${position}px)`;
    }
}

function carouselRightBtn() {
    if (position > -limit) {
        position -= move;
        track.style.transform = `translateX(${position}px)`;
    }
}

let hover = document.querySelectorAll(".carouselBtn");
let currentImage;

for (let i = 0; i < hover.length; i++) {
    hover[i].addEventListener("mouseover", function () {
        currentImage = this.src;
        this.src = "../public/assets/svg/ButtonR.svg";
    });
    hover[i].addEventListener("mouseout", function () {
        this.src = currentImage;
    });
}

limit = Number(news - visibleElements) * 400;