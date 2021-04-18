import { generateToken } from "./generate-token.js"

export const generateLoginTokens = (user) => {
    return {
        authToken: generateToken(user, '3600s'),
        refreshToken: generateToken(user, '25200s'),
        expires: '3600'
    }
}