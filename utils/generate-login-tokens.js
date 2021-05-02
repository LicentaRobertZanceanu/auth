import { generateToken } from "./generate-token.js"
import moment from 'moment'

export const generateLoginTokens = (user) => {
    return {
        authToken: generateToken(user, '3600s'),
        refreshToken: generateToken(user, '25200s'),
        expires: moment().add(1, 'h').unix()
    }
}