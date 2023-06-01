import quotes from "./quotes.json";
import { useState } from "react";
import Navbar from "./navbar.js";
import Quotes from "./quotes.js";
import Bio from "./bio.js";
import "./styles.css";

function App() {
  const [person, setPerson] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  const [currentQuote, setCurrentQuote] = useState(
    person.quotes[Math.floor(Math.random() * person.quotes.length)]
  );
  const [selected, setSelected] = useState("all");

  function randomNumber() {
    if (selected === "all") {
      setPerson(quotes[Math.floor(Math.random() * quotes.length)]);
    }
    let i = Math.floor(Math.random() * person.quotes.length);
    setCurrentQuote(person.quotes[i]);
  }

  function authorSelection(e) {
    if (e.target.value === "all") {
      setSelected(e.target.value);
      randomNumber();
    } else {
      let per = quotes.find((author) => author.name === e.target.value);
      setPerson(per);
      setSelected(e.target.value);
      setCurrentQuote(
        per.quotes[Math.floor(Math.random() * per.quotes.length)]
      );
    }
  }

  let bio = [];

  let quotesMap = quotes.map((author) => {
    bio.push({
      id: author.id,
      name: author.name,
      image: author.image,
      bio: author.bio,
      occupation: author.occupation,
      life: author.life
    });
    return (
      <option key={author.id} value={author.name}>
        {author.name}
      </option>
    );
  });

  return (
    <div>
      <Navbar selection={authorSelection} quotesMap={quotesMap} />
      <Quotes
        person={person}
        currentQuote={currentQuote}
        randomNumber={randomNumber}
      />
      <Bio bio={bio} />
    </div>
  );
}

export default App;
