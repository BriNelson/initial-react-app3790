import * as React from 'react';
import HouseCards from '../components/HouseCards'
import ravenclawBoy from "../../src/components/ravenclawBoy.png"
import { CharacterCard } from "../components/CharacterCard.js";
import { useCharacterContext } from "../contexts/CharactersContext"
import Box from "@mui/material/Box";


function HousesPage() {

    const characterData = useCharacterContext()
    return (
        <div>
        <HouseCards/>

        <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row'
    }}>
        {characterData.characters.map((character) => {
            return (
              <CharacterCard
                replaceImage={ravenclawBoy}
                fullName={character.name}
                house={character.house}
                dateOfBirth={character.dateOfBirth}
                id={character.name}
                
                image={character.image}
              />
            );
        })}
        </Box>
            </div>

        
    )
}

export default HousesPage

