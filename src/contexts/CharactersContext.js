import * as React from 'react'
import axios from 'axios'
import { RepeatOneSharp } from '@mui/icons-material'

const CongressContext = React.createClass({
    senators: [],
    reps: []

})

//useEfect -- something happens evertime we do something else


export const CongressContextProvider = (props) => {
    const [sentators, setSenators] = React.useState([])
    // const [rep, setReps] = React.useState([])

    React.useEffect(() => {
        const fetchSenators = async () => {
            try {
                const response = await axios.get('/characters')
                const characters = await response.data.results[0].characters
                console.log(response)
                setSenators(characters)
            } catch (error){
                console.log(error)

            }


        }
        fetchSenators()
    },[])//only runs once
    
}