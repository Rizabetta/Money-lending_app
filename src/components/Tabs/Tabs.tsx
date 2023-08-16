import { useState } from "react";
import "./Tabs.scss";
import AboutCard from "../AboutCard/AboutCard";
import RatesConditions from "../RatesConditions/RatesConditions";
import Cashback from "../Cashback/Cashback";
import FAQ from "../FAQ/FAQ";


export default function Tabs() {
  const [toggleTab, setToggleTab] = useState(1);

  const toggleTabs = (index: number) => {
    setToggleTab(index);
  };

const tabsList = [
    {id:1, title: 'About card', component: <AboutCard/>},
    {id:2, title: 'Rates and conditions', component: <RatesConditions/>},
    {id:3, title: 'Cashback', component: <Cashback/>},
    {id:4, title: 'FAQ', component: <FAQ/>},
]

  return (
    <div className="tabs__container">
      <div className="tabs__block">
        {tabsList.map( item => <div key={item.id} className={toggleTab === item.id ? "tabs active-tabs" : "tabs"} onClick={() => toggleTabs(item.id)}>
          {item.title}
        </div> )}
      </div>

      <div className="tabs__content">
      {tabsList.map( item => <div  key = {item.id} className={toggleTab ===  item.id ? "content active-content" : "content"}>
          {item.component}
        </div>)}
      </div>
    </div>
  );
}
