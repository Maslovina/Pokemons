import Main from './Layout/Main/Main';
import Button from './Ui/Button/Button';
import './styles/main.css'
import Container from './Layout/Container/Container';
import Zaglushka from './Components/Zaglushka/Zaglushka';
import ChipsContainer from './Components/ChipsContainer/ChipsContainer';
import ButtonContainer from './Components/ButtonContainer/ButtonContainer';
import Card from './Components/Card/Card';
import { useState, useEffect } from 'react';



function App() {
  const [data, setData] = useState([]);
  const [pokemonCard, setPokemonCard] = useState({})

 
  useEffect(() => {
    const zapr = fetch("https://pokeapi.co/api/v2/pokemon?limit=10", {
      Method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data.results))

  }, [])

  useEffect(() => {
    const first = data[0]
    if (data.length > 0) {
      fetch(first.url)
      .then((res) => res.json())
      .then((card) =>
        setPokemonCard({
          name: card.name.charAt(0).toUpperCase() + card.name.slice(1),
          id: card.id,
          series: card.moves.length + 1,
          height: card.height,
          pic: card.sprites.front_shiny,
        }))
    }
  },[data])

  const toggleBtn =  (e) => {
    const newPokemon = data.find((el) => el.name === e.target.value)
    fetch(newPokemon.url)
      .then((res) => res.json())
      .then((card) =>
        setPokemonCard({
          name: card.name.charAt(0).toUpperCase() + card.name.slice(1),
          id: card.id,
          series: card.moves.length + 1,
          height: card.height,
          pic: card.sprites.front_shiny,
        })
      );
  }
  
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
            name={pokemonCard.name}
            id={pokemonCard.id}
            series={pokemonCard.series}
            height={pokemonCard.height}
            pic={pokemonCard.pic}
          />
        </ChipsContainer>
      </Container>
    </Main>
  );
}

export default App;
