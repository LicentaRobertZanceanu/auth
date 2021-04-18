import { callApi, USERS_MICROSERVICE_API, generateLoginTokens } from '../utils/index.js'
import bcrypt from 'bcrypt'

export const login = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        res
            .status(400)
            .json({
                message: "A field is missing!"
            })
        return
    }
    const requestOptions = {
        uri: `${USERS_MICROSERVICE_API}/${req.body.email}`,
        method: "GET"
    }
    try {
        let response = await callApi(requestOptions)
        bcrypt.compare(req.body.password, response.password, (err, result) => {
            if (err) {
                res
                    .status(500)
                    .json({
                        message: 'Internal server error!'
                    })
                return
            }
            if (!result) {
                res
                    .status(401)
                    .json({
                        message: 'Wrong credentials!'
                    })

                return
            }

            const toSend = generateLoginTokens(response)
            res.json(toSend)
            return
        })
    } catch (error) {
        res
            .status(401)
            .json({
                message: 'Wrong credentials!'
            })
    }

    return
}