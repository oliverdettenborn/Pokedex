import React from 'react';
import {useState} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import PokemonDetails from './components/PokemonDetails';


function App(){
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

export default App;
