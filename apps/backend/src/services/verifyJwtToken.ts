import * as jose from 'jose'

export const verifyJwtToken = async (jwt) => {
  const secret = new TextEncoder().encode(
    'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2'
  )
    try{
        const res = await jose.jwtVerify(jwt, secret)
        return res
    } catch (err) {
        return err
    }
};
