const axios = require('axios')

exports.handler = async function (event, context) {
    
    console.log(event)
    console.log(context)
    try {
        const response = await axios.get("http://hp-api.herokuapp.com/api/characters/students")
        //api key in headers if needed
        // console.log(response.data)
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        }
    } catch (err) {
        return {
            statusCode: 404,
            body: err.toString()
        }
    }
    
}