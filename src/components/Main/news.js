let newsKey = new XMLHttpRequest();
newsKey.open('GET', "../src/keys/newsAPI.txt", false);
newsKey.send();

let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${newsKey.responseText}`;
let req = new Request(url);

fetch(req)
    .then(response => response.json()).then(articles => {
        let arr = 0;
        for (i = 0; i < articles.articles.length; i++) {
            if (!articles.articles[i].urlToImage)
                console.log('null'); else {
                let div = document.createElement("div");
                div.className = "news__card";
                let newsContainer = document.querySelector('.news__track');
                newsContainer.append(div);

                let a = document.createElement("a");
                a.href = articles.articles[i].url;
                div.append(a);

                let img = document.createElement("img");
                img.src = articles.articles[i].urlToImage;
                img.className = "card__image";
                a.append(img);

                let title = document.createElement("h4");
                title.innerHTML = articles.articles[i].title;
                title.className = "card__h4";
                a.append(title);

                let description = document.createElement("p");
                description.innerHTML = articles.articles[i].description;
                description.className = "card__description";
                a.append(description);
                arr++;
            }
        }
        test(arr);
    });

let position = 0;
let gap = 80;
let cardkWidth = 320;
let move = gap + cardkWidth;
let track = document.querySelector('.news__track');

function carouselLeftBtn() {
    if (position !== 0) position += move;
    track.style.transform = `translateX(${position}px)`;
    document.getElementsByClassName("news__input-left").src = "../public/assets/svg/ButtonR.svg";
}

function carouselRightBtn() { 
    if (position !== -6400)
        position -= move;
    track.style.transform = `translateX(${position}px)`;
    document.getElementsByClassName("news__input-right").src = "../public/assets/svg/ButtonR.svg";
}

function test(arr) {
    let trackWidth = document.getElementsByClassName('news__track')[0].clientWidth;
    let visibleElements = 0;
    if ((trackWidth == 1300) || (trackWidth == 1160)) visibleElements = 3;
    if (trackWidth == 770) visibleElements = 2;
    if (trackWidth == 350) visibleElements = 1;
    // arr - visibleElements = 18 - 3 = 15 => 15 * 400 = 6000
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
    var a = Number(arr - visibleElements) * 400;
    console.log(Number(arr - visibleElements) * 400);
    console.log(arr);
}