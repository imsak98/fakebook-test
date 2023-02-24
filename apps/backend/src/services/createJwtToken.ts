import * as jose from 'jose'

export const createJwtToken = async (payload) => {

    const config = {
        secret: process.env["JWT_TOKEN_SECRET"] as string
      }
      const secret = new TextEncoder().encode(
        `${config.secret}`
      )
        const alg = 'HS256'

    const jwt = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer('admin')
    .setAudience('admin')
    .setExpirationTime('2h')
    .sign(secret)
    console.log(jwt);
    return jwt
}