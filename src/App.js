import ExpenseItem from './components/CharacterCardContainer'
import * as React from 'react';

import { ResponsiveAppBar } from "./components/NavBar";

import {CongressContextProvider} from './contexts/CharactersContext'

function App() {
  
  return (
    <div>
    <ResponsiveAppBar></ResponsiveAppBar>
      <CongressContextProvider>
      <ExpenseItem></ExpenseItem>
      </CongressContextProvider>
      </div>
    
  );
}


export default App;
