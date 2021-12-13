import React from 'react'
import {useIdentityContext} from "react-netlify-identity-gotrue"

function Welcome() {
    const identity = useIdentityContext()
    return (
       
        // identity.provisionalUser ? <h1>check email</h1> : <h1> Welcome {identity.user?.email} </h1>
        // {!identity.provisionalUser}
        <>
        {!identity.provisionalUser && !identity.user && (
            <h1>Welcome to this page, pleas sign in and sign up</h1>
            )}
            
            {identity.provisionalUser && (
                <h1>Thank you for signing up, check confirmation email</h1>
            )}

            {identity.user && (
                <h1>Welcome { identity.user.user_metadata?.full_name }!</h1>
            )}
       </>     
    )
}

export default Welcome 


