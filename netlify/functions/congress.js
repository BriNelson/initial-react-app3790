const axios = require('axios')

exports.handler = async function (event, context) {
    
    console.log(event)
    console.log(context)
    try {
        const response = await axios.get("http://hp-api.herokuapp.com/api/characters")
        //api key in headers if needed
        
    } catch (err) {
        return {
            statusCode: 404,
            body: err.toString()
        }
    }
    
}