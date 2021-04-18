import jwt from 'jsonwebtoken'

export const isAuthenticated = async (req, res) => {
    const token = req.headers.authorization
    if (!token) {
        res
            .status(401)
            .json({
                message: 'Access denied!'
            })
        return
    }
    try {
        const authToken = token.substring(7)
        const verified = await jwt.verify(authToken, process.env.TOKEN_SECRET)
        res.json(verified)
    } catch (error) {
        res
            .status(401)
            .json({
                message: 'Access denied!'
            })
    }
    return
}