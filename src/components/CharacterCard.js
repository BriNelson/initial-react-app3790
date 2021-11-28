import Card from "@mui/material/Card";

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

function CharacterCard(props) {

    const {
        fullName,
        house,
        actor,
        dateOfBirth
    } = props;
    

    return (
        
        <Card key={fullName} sx={{ minWidth: 275 }}>
              {actor} 
            
        
            <CardContent>
        
        <Typography variant="h5" component="div">
        {fullName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {house}
        </Typography>
        <Typography variant="body2">
        {dateOfBirth}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
        
        </Card>
            
           
    )
}

export {CharacterCard}
