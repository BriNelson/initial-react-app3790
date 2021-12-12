import React from 'react'
import {useIdentityContext} from "react-netlify-identity-gotrue"

function Welcome() {
    const identity = useIdentityContext()
    return (
       
        identity.provisionalUser ? <h1>check email</h1> : <h1> Welcome {identity.user?.email} </h1>
        
            
    )
}

export default Welcome 


