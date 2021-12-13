import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import hogwarts_house_element_window_by_hallowkey_d78rp79 from "../../src/images/griffindor.jpg"
import { CardActionArea } from '@mui/material';


function HouseCards() {
    return (
      <Card sx={{
        width: 400,
        
      }}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="400"
          image={hogwarts_house_element_window_by_hallowkey_d78rp79}
          alt="green iguana"
        />
          </CardActionArea>
    </Card>
    )
}

export default HouseCards
