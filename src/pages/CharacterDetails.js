import React from "react";
import { useParams } from "react-router-dom";
import { useCharacterContext } from "../contexts/CharactersContext";

import {
  Box,
  Paper,
  Card,
  CardMedia,
  TableContainer,
  Cardheader,
  CardContent,
  Divider,
  TableHead,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

function CharacterDetails() {
  const params = useParams();
  const characterData = useCharacterContext();
  console.log(params);
  console.log(characterData);

  const member = characterData.characters.find(
    (item) => item.name === params.characterId
  );
  console.log(member);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "600px",
        }}
      >
        <CardMedia
          sx={{
            width: "300px",
          }}
          component="img"
          height="405"
          image={member.image}
        ></CardMedia>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <h3> {member.name} </h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <Divider />

            <TableBody>
                          <TableRow>
                          <TableCell><b>Birthdday</b></TableCell>       
                <TableCell><h4>{member.dateOfBirth}</h4></TableCell>
              </TableRow>
                          <TableRow>
                          <TableCell><b>Gender</b></TableCell> 
                <TableCell>{member.gender}</TableCell>
              </TableRow>
                          <TableRow>
                          <TableCell><b>Ancestry</b></TableCell> 
                <TableCell>{member.ancestry}</TableCell>
              </TableRow>
                          <TableRow>
                          <TableCell><b>House</b></TableCell>
                <TableCell>{member.house}</TableCell>
              </TableRow>
                          <TableRow>
                          <TableCell><b>Actor</b></TableCell>
                <TableCell>{member.actor}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default CharacterDetails;
