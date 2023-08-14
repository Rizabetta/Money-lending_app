import AboutCard from "../../components/AboutCard/AboutCard";
import Cashback from "../../components/Cashback/Cashback";
import FAQ from "../../components/FAQ/FAQ";
import InstructionGetCart from "../../components/InstructionGetCart/InstructionGetCart";
import "../../components/Main/main.scss";
import PlatinumCard from "../../components/PlatinumCard/PlatinumCard";
import RatesConditions from "../../components/RatesConditions/RatesConditions";

export default function Loan() {
  return (
    <main className="main">
      <PlatinumCard />
      <AboutCard />
      <RatesConditions />
      <Cashback />
      <FAQ />
      <InstructionGetCart/>
    </main>
  );
}
