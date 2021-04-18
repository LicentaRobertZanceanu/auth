import jwt from 'jsonwebtoken'
import { generateLoginTokens } from "../utils/index.js"

export const refreshToken = async (req, res) => {
    const refreshToken = req.headers.refreshtoken
    if (!refreshToken) {
        res
            .status(401)
            .json({
                message: 'Access denied!'
            })
    }
    try {
        const refreshTokenWithoutBearer = refreshToken.substring(7)
        const verified = jwt.verify(refreshTokenWithoutBearer, process.env.TOKEN_SECRET)

        const toSend = generateLoginTokens(verified)
        res.json(toSend)
    } catch (error) {
        res
            .status(401)
            .json({
                message: 'Access denied!'
            })
    }
    res.end()
}