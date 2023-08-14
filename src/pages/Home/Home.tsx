import CardDesign from "../../components/CardDesign/CardDesign";
import ExchangeRate from "../../components/ExchangeRate/ExchangeRate";
import Features from "../../components/Features/Features";
import Global from "../../components/Global/Global";
import '../../components/Main/main.scss'
import News from "../../components/News/News";
import Support from "../../components/Support/Support";

export default function Home() {
    return (
          <main className="main">
            <CardDesign/>
            <Features/>
            <ExchangeRate/>
            <Global/>
            <News/>
            <Support/>
          </main>
    );
}
  