function fetchCurrency(from: string, to: string) {
  const url = `https://currency-exchange.p.rapidapi.com/exchange?from=${from}&to=${to}&q=1.0`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "29195502fbmsh29ef30de2b5d032p1b9633jsn9a396d0b7e87",
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  };
  return fetch(url, options).then((response) => response.text());
}

async function fetchNews() {
  let response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2f70bdb910e145a69b9f60589239e996"
  );
  let news = await response.json();
  return news.articles;
}

function postEmail(email: string) {
  let response = fetch("http://localhost:8080/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ email: email }),
  });

  response.then((data) => {
    sessionStorage.setItem("status", `${data.status}`);
  });
}

// function postPrescoring(data: any) {
//   let response = fetch("http://localhost:8080/email", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify({ email: email }),
//   });

//   response.then((data) => {
//     sessionStorage.setItem("status", `${data.status}`);
//   });
// }

export { fetchCurrency, fetchNews, postEmail };
