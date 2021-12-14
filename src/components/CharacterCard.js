import React, { useState } from "react";

import Card from "@mui/material/Card";
// import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

function CharacterCard(props) {
  const buttonText = "favorite";

  const [favorite, setFavorite] = useState(false);

  const clickHandler = () => {
    setFavorite(!favorite);

    // handleEmptyImage
  };
  // const imageReplace = () => {
  //   if (props.image != "") {
  //     return props.image
  //   } else(console.log("error"))
  // }

  return (
    <Card key={props.fullName} sx={{ minWidth: 275, m: 2 }}>
      {props.actor}
      {props.image !== "" ? (
        <CardMedia
          sx={{ width: "285px" }}
          component="img"
          height="400"
          maxWidth="200"
          image={props.image}
          alt={props.fullName}
        />
      ) : (
        <CardMedia
          component="img"
          height="400"
          width="200"
          image={props.replaceImage}
          // image={ImageFill}
          alt={props.fullName}
        />
      )}

      <CardContent>
        <Typography variant="h5" component="div">
          {props.fullName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.house}
        </Typography>
        

        <BookmarkIcon
          sx={{ color: favorite ? "blue" : "red" }}
          variant="contained"
          onClick={clickHandler}
        >
          {buttonText}
        </BookmarkIcon>
      </CardContent>
    </Card>
  );
}

export { CharacterCard };
// https://uvu365.sharepoint.com/sites/Course_dgm_3790_001_2021_fall_full_term-N8C6Mn7YBCfRj/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FCourse%5Fdgm%5F3790%5F001%5F2021%5Ffall%5Ffull%5Fterm%2DN8C6Mn7YBCfRj%2FShared%20Documents%2FRecorded%20Sessions%2FRecordings%2FMeeting%20in%20%5FRecorded%20Sessions%5F%2D20210922%5F143551%2DMeeting%20Recording%2Emp4&parent=%2Fsites%2FCourse%5Fdgm%5F3790%5F001%5F2021%5Ffall%5Ffull%5Fterm%2DN8C6Mn7YBCfRj%2FShared%20Documents%2FRecorded%20Sessions%2FRecordings
