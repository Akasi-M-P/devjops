import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import CardList from "./Components/Card/CardList";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="cardList__container">
        <CardList />
      </main>
    </>
  );
}

export default App;
