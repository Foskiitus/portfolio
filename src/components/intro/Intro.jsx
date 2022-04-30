import React from "react";
import "./intro.scss";

export default function Intro() {


  return (
    <div className="intro">
      <div className="container">
        <div className="left"><h2>Confie o seu projeto na experiência e rigor que nos caracteriza.</h2></div>
        <div className="right">
          <button>
            <span className="text">Fale connosco</span>
            <div className="icon-container">
              <div className="icon icon--left">
                <svg>
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </div>
              <div className="icon icon--right">
                <svg>

                  <use xlinkHref="#arrow-right"></use>
                </svg>

              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
