import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import GlobalStyle from './assets/GlobalStyle'
import { Header } from './components';
import PokemonList from './pages/PokemonList';
import PokemonDetails from './pages/PokemonDetails';
import { PokemonsPorvider } from './context/PokemonsContext';

function App(){
  return (
    <PokemonsPorvider>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path='/' exact component={PokemonList}/>
          <Route path='/pokemon/:id' component={PokemonDetails}/>
        </Switch>
      </BrowserRouter>
    </PokemonsPorvider>
  )
}

export default App;
