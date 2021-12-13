import * as React from 'react'
import axios from 'axios'
// import { RepeatOneSharp } from '@mui/icons-material'

const CharacterContext = React.createContext({
    characters: [],
})

//useEfect -- something happens evertime we do something else


export const CharacterContextProvider = (props) => {
    const [characters, setCharacters] = React.useState([])
    // const [rep, setReps] = React.useState([])

    React.useEffect(() => {
        const fetchCharacters = async () => {
            const characterUrl = `/.netlify/functions/harryPotterCharacters`
            try {
                const response = await axios.get(characterUrl)
                const characters = await response.data
                console.log(response)
                setCharacters(characters)
            } catch (error){
                console.log(error)

            }


        }
        fetchCharacters()
    },[])//only runs once
    
    return (
        <CharacterContext.Provider value={{
            characters,
        }}>
            {props.children}



        </CharacterContext.Provider>
    )
}

// use effect = side effect when state changes


export const useCharacterContext = () => React.useContext(CharacterContext)