import './App.css'
import { useState, useEffect } from 'react'
import { Playground } from './Playground'
import {Dice} from "./components/Dice"

function App() {
  const [rollPlayer, setRollPlayer] = useState(1);
  const [rollEnemy, setRollEnemy] = useState(1);
  const [pokemonPlayer, setPokemonPlayer] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =>
    {
      fetch(`https://pokeapi.co/api/v2/pokemon/${rollPlayer}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonPlayer(data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      });
    }, [rollPlayer]);

  return (
    <>
    <Dice minNum = {1} maxNum = {999} rollPlayer = {rollPlayer} rollEnemy = {rollEnemy} setRollPlayer = {setRollPlayer} setRollEnemy = {setRollEnemy}  />
    <div className="players-roll-container">
      <div className="players-roll-label">Players Roll: </div>
      <div className="players-roll-value">{rollPlayer}</div>
    </div>

{pokemonPlayer &&
    <div className = "pokemon-container">
      <div className = "pokemon-label">Name: <span className="pokemon-value"> {pokemonPlayer && pokemonPlayer.name}</span></div>
      <div className = "pokemon-label">Height: <span className="pokemon-value"> {pokemonPlayer && pokemonPlayer.height}</span></div>
      <div className = "pokemon-label">Weight: <span className="pokemon-value"> {pokemonPlayer && pokemonPlayer.weight}</span></div>
      <div className = "pokemon-label">Image: <img className="pokemon-image" src={pokemonPlayer.sprites.front_default && pokemonPlayer.sprites.front_default} title='playersPokemon Image' />
      {pokemonPlayer.sprites.front_shiny && <img className="pokemon-image" src= {pokemonPlayer.sprites.front_shiny} title='playersPokemon Image' />}
      {pokemonPlayer.sprites.front_female && <img className="pokemon-image" src= {pokemonPlayer.sprites.front_female} title='playersPokemon Image' />}
      {pokemonPlayer.sprites.front_shiny_female && <img className="pokemon-image" src= {pokemonPlayer.sprites.front_shiny_female} title='playersPokemon Image' />}
      {pokemonPlayer.sprites.back_default && <img className="pokemon-image" src= {pokemonPlayer.sprites.back_default} title='playersPokemon Image' />}
      {pokemonPlayer.sprites.back_shiny && <img className="pokemon-image" src= {pokemonPlayer.sprites.back_shiny} title='playersPokemon Image' />}</div>

      <div className = "pokemon-label">Name: <span className="pokemon-value"> {pokemonPlayer && pokemonPlayer.name}</span></div>

    </div>
    }
    </>
  )
}

export default App
