import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Pokemon from './Pokemon';


export default function App(){
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/pokemon/:id' exact>
          <Pokemon />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}