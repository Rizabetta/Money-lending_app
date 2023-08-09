import CardDesign from "../../components/CardDesign/CardDesign";
import ExchangeRate from "../../components/ExchangeRate/ExchangeRate";
import Features from "../../components/Features/Features";
import '../../components/Main/main.scss'

export default function Home() {
    return (
        <div >
          <main className="main">
            <CardDesign/>
            <Features/>
            <ExchangeRate/>
          </main>
        </div>
    );
  }
  