import ExpenseItem from './components/CharacterCardContainer'
import * as React from 'react';

import { ResponsiveAppBar } from "./components/NavBar";

import { CongressContextProvider } from './contexts/CharactersContext'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'
import Welcome from './pages/Welcome';
function App() {
  
  return (
    <div>
      <CongressContextProvider>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
      <Route path="/welcome"element={<Welcome />}/>
      <Route path="/congress"element={<ExpenseItem />}/>
      
      </Routes>
      </CongressContextProvider>
      </div>
    
  );
}


export default App;
