

import { characters } from "../data/characters";
import { CharacterCard } from "./CharacterCard.js";
import Box from "@mui/material/Box"
import "./ExpenseItem.css";

function CharacterCardContainer(props) {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row'
    }}>
    
      
      {characters.map((character) => {
        return (
          <CharacterCard
            fullName={character.name}
            house={character.house}
            dateOfBirth={character.dateOfBirth}
            id={character.name}
          />
        );
      })}
    
      </Box>
  );
}
export default CharacterCardContainer;


