import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"

export default function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const list = 
  [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "webGame",
      title: "Web App Game"
    },
    {
      id: "webVPN",
      title: "Web App VPN"
    },
    {
      id: "cpp",
      title: "C++ Game"
    }
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item=>(
          <PortfolioList title={item.title} active={selected == item.id} setSelected={setSelected} id={item.id}/>
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img></img>
          <h3>Pick the Box</h3>
        </div>
      </div>
    </div>
  )
}
