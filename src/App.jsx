import { useState, useEffect } from "react";
import "./styles/main.css";
import Main from "./Layout/Main/Main";
import Button from "./Ui/Button/Button";
import Container from "./Layout/Container/Container";
import Zaglushka from "./Components/Zaglushka/Zaglushka";
import ChipsContainer from "./Components/ChipsContainer/ChipsContainer";
import ButtonContainer from "./Components/ButtonContainer/ButtonContainer";
import Card from "./Components/Card/Card";

function App() {
  const [data, setData] = useState([]); // данные о покемонах
  const [pokemonCard, setPokemonCard] = useState({}); // состояние карточки
  const [currentCard, setCurrentCard] = useState({}); // состояние выбранное

  // получение данных с api
  useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=10", {
        Method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setData(data.results))
        .catch((err) => console.log(err));
    
  }, []);

  // отрисовка последующих
  useEffect(() => {
    if (data.length > 0) {
      fetch(pokemonCard?.url ?? data[0].url)
        .then((res) => res.json())
        .then((card) =>
          setCurrentCard({
            name: card.name.charAt(0).toUpperCase() + card.name.slice(1),
            id: card.id,
            series: card.moves.length + 1,
            height: card.height,
            pic: card.sprites.front_shiny,
          })
        )
        .catch((err) => console.log(err));
    }
  }, [pokemonCard, data]);
  
  // отрисовка карточки по нажатию на кнопку
  const toggleBtn = (e) => {
    const newPokemon = data.find((el) => el.name === e.target.value);
    setPokemonCard(newPokemon)
  };

  return (
    <Main>
      <Container>
        <Zaglushka />
        <ChipsContainer>
          <ButtonContainer>
            {data.map((i) => (
              <Button handler={toggleBtn} value={i.name} key={i} />
            ))}
          </ButtonContainer>
          <Card
            name={currentCard.name}
            id={currentCard.id}
            series={currentCard.series}
            height={currentCard.height}
            pic={currentCard.pic}
          />
        </ChipsContainer>
      </Container>
    </Main>
  );
}

export default App;
