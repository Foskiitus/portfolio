import "./App.scss";
import Intro from "./components/intro/Intro";
import CardsRow from "./components/cardsRow/CardsRow";
import Hero from "./components/hero/Hero";
import Servicos from "./components/servicos/Servicos";

function App() {

  return (
    <div className="app">
      <Intro />
      <CardsRow />
      <Hero />
      <Servicos />

    </div>
  );
}

export default App;
