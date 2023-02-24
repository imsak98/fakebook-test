import * as jose from 'jose'

export const verifyJwtToken = async (jwt) => {

  const config = {
    secret: process.env["JWT_TOKEN_SECRET"] as string
  }
  const secret = new TextEncoder().encode(
    `${config.secret}`
  )
    try{
        const res = await jose.jwtVerify(jwt, secret)
        return res
    } catch (err) {
        return err
    }
};
