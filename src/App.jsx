import "./App.scss";
import Intro from "./components/intro/Intro";
import CardsRow from "./components/cardsRow/CardsRow";
import Hero from "./components/hero/Hero";

function App() {

  return (
    <div className="app">
      <Intro />
      <CardsRow />
      <Hero />
    </div>
  );
}

export default App;
