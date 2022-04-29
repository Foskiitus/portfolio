import "./App.scss";
import Intro from "./components/intro/Intro";
import CardsRow from "./components/cardsRow/CardsRow";

function App() {

  return (
    <div className="app">
      <Intro />
      <CardsRow />
    </div>
  );
}

export default App;
