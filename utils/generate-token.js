import jwt from 'jsonwebtoken'

export const generateToken = (
    { _id, firstName, lastName, email },
    expiresIn
) => {
    return jwt.sign({
        _id,
        firstName,
        lastName,
        email
    }, process.env.TOKEN_SECRET, { expiresIn })
}