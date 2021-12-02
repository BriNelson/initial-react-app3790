import ExpenseItem from './components/CharacterCardContainer'
import * as React from 'react';

import { ResponsiveAppBar } from "./components/NavBar";
import { dividerClasses } from '@mui/material';

function App() {
  
  return (
    <div>
    <ResponsiveAppBar></ResponsiveAppBar>
      
      <ExpenseItem></ExpenseItem>
      
      </div>
    
  );
}


export default App;
