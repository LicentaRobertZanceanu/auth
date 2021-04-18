import { callApi } from '../utils/index.js'
import { USERS_MICROSERVICE_API } from '../utils/index.js'

export const signup = async (req, res) => {
    const requestOptions = {
        uri: USERS_MICROSERVICE_API,
        method: "POST",
        json: true,
        body: req.body
    }
    try {
        const response = await callApi(requestOptions)
        res.json(response)
    } catch (error) {
        res
            .status(error.statusCode)
            .json(error.body)
        console.log('error', error)
    }
    res.end()
}