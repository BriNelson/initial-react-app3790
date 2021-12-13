import { Box } from '@mui/system'
import React from 'react'
import {useIdentityContext} from "react-netlify-identity-gotrue"


const style = {
    position: "absolute",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };
function Welcome() {
    const identity = useIdentityContext()
    return (
       
        // identity.provisionalUser ? <h1>check email</h1> : <h1> Welcome {identity.user?.email} </h1>
        // {!identity.provisionalUser}
        <>
            <Box sx={style}>
        {!identity.provisionalUser && !identity.user && (
            <h1>Welcome to this page, pleas sign in and sign up</h1>
            )}
            
            {identity.provisionalUser && (
                <h1>Thank you for signing up, check confirmation email</h1>
            )}

            {identity.user && (
                <h1>Welcome { identity.user.user_metadata?.full_name }!</h1>
                )}
                </Box>
       </>     
    )
}

export default Welcome 


