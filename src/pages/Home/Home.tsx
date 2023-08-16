import {
  CardDesign,
  Features,
  ExchangeRate,
  Global,
  News,
  Support,
} from "../../components";
import "../../components/Main/main.scss";

export default function Home() {
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
