import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  PortfolioData
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "WebSites",
    },
    {
      id: "mobile",
      title: "Apps Moveis",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];

  const webSites = []
  const mobile = []
  const design = []
  const branding = []
  const featuredPortfolio = []

  PortfolioData.map((d) => (
    d.featured === true ? featuredPortfolio.push(d) : '',
    d.type === "web" ? webSites.push(d) :
      d.type === "mobile" ? mobile.push(d) :
        d.type === "design" ? design.push(d) :
          d.type === "branding" ? branding.push(d) : ''
  ))

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webSites);
        break;
      case "mobile":
        setData(mobile);
        break;
      case "design":
        setData(design);
        break;
      case "branding":
        setData(branding);
        break;
      default:
        setData(mobile);
    }
  }, [selected]);

  // function limitCaracteres(string) {
  //   if (string.length > 250) {
  //     return string.slice(0, 250) + ` ...`;
  //   } else {
  //     return string;
  //   }
  // }
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.id}>
            <div className="top">
              <img src={d.img} alt={d.title} />
              <h3>Ver Projecto</h3>
            </div>
            <div className="bottom">
              <h3>{d.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
