import {
  CardDesign,
  Support,
  News,
  Global,
  ExchangeRate,
  Features,
} from "../../components/HomePage";

function Home() {
  return (
    <main className="main">
      <CardDesign />
      <Features />
      <ExchangeRate />
      <Global />
      <News />
      <Support />
    </main>
  );
}

export { Home };
