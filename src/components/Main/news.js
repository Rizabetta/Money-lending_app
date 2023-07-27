let newsKey = new XMLHttpRequest();
newsKey.open('GET', "../src/keys/newsAPI.txt", false);
newsKey.send();

var url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${newsKey.responseText}`;
var req = new Request(url);

fetch(req)
    .then(response => response.json()).then(articles => {
        for (i = 0; i < articles.articles.length; i++) {

            if (articles.articles[i].urlToImage == null)
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
            }
        }
    });

function leftButton () {
console.log('left');
}

function rightButton() {
console.log('right');
}