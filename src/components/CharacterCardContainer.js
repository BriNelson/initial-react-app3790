import { characters } from "../data/characters";
import { CharacterCard } from "./CharacterCard.js";
import "./ExpenseItem.css";

function CharacterCardContainer(props) {
  return (
    <div>
      <h2> does this work </h2>
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
    </div>
  );
}
export default CharacterCardContainer;
