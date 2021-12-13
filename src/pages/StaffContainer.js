
import React, { useState } from "react";
//TODO: 20211020  53:20 adding new page

// import { characters } from "../data/characters";
import { CharacterCard } from "../components/CharacterCard.js";
import { useCharacterContext } from "../contexts/CharactersContext"

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// import "./ExpenseItem.css";

////////////////////////////////trying to do something with a state that relys on another state

// const [favorites, setFavorites] = useState
 
// const addToFavorites = (character) => {

//   console.log(`${character} added to favorites`)
//   console.log('state favorite container')
//   setFavorites((prevState) => {
//   return [...prevState, character]
// })

// }

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function CharacterCardContainer(props) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const characterData = useCharacterContext()
  return (
    <div>
      
      <Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Favorites
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      I was going to do a list of favorites here.
    </Typography>
  </Box>
</Modal>




    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row'
    }}>
    
      
      {characterData.characters.map((character) => {
        return (
          <CharacterCard
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
  );
}
export default CharacterCardContainer;


