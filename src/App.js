import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import CardList from "./Components/Card/CardList";
import Button from "./Components/Button/Button";
import data from "./data/data.json";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="cardList__container">
        <CardList data={data} />
        <section className="btn__Container">
          <Button />
        </section>
        ;
      </main>
    </>
  );
}

export default App;
