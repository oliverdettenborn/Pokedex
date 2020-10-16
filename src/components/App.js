import React from 'react';
import {useState} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import PokemonDetails from './PokemonDetails';


export default function App(){
  const [pokemons,setPokemons] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Main 
            pokemons={pokemons} 
            setPokemons={setPokemons}
          />
        </Route>
        <Route path='/pokemon/:id'>
          <PokemonDetails quantityPokemon={pokemons.length}/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}