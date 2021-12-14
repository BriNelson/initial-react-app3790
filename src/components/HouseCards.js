import * as React from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";
import gryfindorCrestImg from "../../src/images/griffindor.jpg";
import slytherinCrestImg from "../../src/images/slytherin.jpg";
import HufflepuffCrestImg from "../../src/images/Hufflepuff.jpg";
import ravenclawCrestImg from "../../src/images/ravenclaw.jpg";
import { CardActionArea } from "@mui/material";

function HouseCards() {
  return (
    <Container sx={{
      marginTop:"50px"
    }} >
      <Typography variant="h3" sx={{
      marginBottom:"30px"
    }} >
        Hogwarts Houses
      </Typography>
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
            image={gryfindorCrestImg}
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
        <CardActionArea onClick={console.log("card action area")}> 
          <CardMedia
            component="img"
            height="250"
            image={slytherinCrestImg}
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
            image={ravenclawCrestImg}
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
            image={HufflepuffCrestImg}
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
