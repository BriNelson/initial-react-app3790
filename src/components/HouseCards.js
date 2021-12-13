import * as React from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';

import CardMedia from "@mui/material/CardMedia";
import hogwarts_house_element_window_by_hallowkey_d78rp79 from "../../src/images/griffindor.jpg";
import { CardActionArea } from "@mui/material";

function HouseCards() {
  return (
    <Container>
      <Grid container spacing={1}>
      <Grid item xs={3}>
      <Card
        sx={{
          width: 250,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={hogwarts_house_element_window_by_hallowkey_d78rp79}
            alt="green iguana"
          />
        </CardActionArea>
      </Card>

</Grid>
<Grid item xs={3}>
      <Card
        sx={{
          width: 250,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={hogwarts_house_element_window_by_hallowkey_d78rp79}
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
        </Grid>
        <Grid item xs={3}>
      <Card
        sx={{
          width: 250,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={hogwarts_house_element_window_by_hallowkey_d78rp79}
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
      </Grid>
      <Grid item xs={3}>
      <Card
        sx={{
          width: 250,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={hogwarts_house_element_window_by_hallowkey_d78rp79}
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
    </Grid>
</Grid>


    </Container>
  );
}

export default HouseCards;
