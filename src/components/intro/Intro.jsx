import "./intro.scss";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Intro() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Designer", "UI Designer", "Desenvolvedor"],
      typeSpeed: 50,
      backSpeed: 50,
    };
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Olá, Eu sou o</h2>
          <h1>Ricardo</h1>
          <h3>
            <span ref={el}></span> Freelance
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
