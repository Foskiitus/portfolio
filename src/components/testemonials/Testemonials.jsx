import "./testemonials.scss";
import { testemonials } from "../../data";

export default function Testemonials() {
  return (
    <div className="testemonials" id="testemonials">
      <h1>Testemunhos</h1>
      <div className="container">
        {testemonials.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              <img
                src="assets/right-arrow.png"
                alt="rightArrow"
                className="left"
              />
              <img src={d.img} alt={d.title} className="user" />
              <img src={d.icon} alt="Youtube" className="right" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
