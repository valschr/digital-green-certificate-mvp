import jwt from 'jsonwebtoken'

const pubKey = process.env.REACT_APP_JWT_PUBLIC_KEY

export const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, pubKey, { algorithm: "RS256" }, (err, decoded) => {
            if (err) {
                return reject(err)
            }
            resolve(decoded)
        })
    })
}

export const decode = token => jwt.decode(token)