import  Card  from "@mui/material/Card";
function CharacterCard(props) {

    const {
        fullName,
        house,
        actor,
        dateOfBirth
    } = props;
    

    return (
        <div>
        <Card key={fullName}>
            {fullName} {house} {actor} {dateOfBirth}
            </Card>
            </div>
    )
}

export {CharacterCard}
