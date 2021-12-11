import ExpenseItem from './components/CharacterCardContainer'
import * as React from 'react';

import { ResponsiveAppBar } from "./components/NavBar";

import { CongressContextProvider } from './contexts/CharactersContext'
import { Route } from 'react-router-dom';
import Welcome from './components/Welcome'

function App() {
  
  return (
    <div>
      <CongressContextProvider>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Route path="/welcome"><Welcome /></Route>
      
      <Route path="/congress"><ExpenseItem/></Route>
      </CongressContextProvider>
      </div>
    
  );
}


export default App;
