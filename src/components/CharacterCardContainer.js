
import React, {useState} from "react";
import { characters } from "../data/characters";
import { CharacterCard } from "./CharacterCard.js";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "./ExpenseItem.css";

// const [favorites, setFavorites] = useState

// const addToFavorites = () => {
//   console.log('state favorite container')
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
  
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>




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
      </div>
  );
}
export default CharacterCardContainer;


