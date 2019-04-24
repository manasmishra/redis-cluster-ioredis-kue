/**
 * Configuration file to hold information and environment variables related to
 * configuration of the auth server
 */
module.exports = {
  openId: {
    defaultScope : 'core',
    // Set HTTP timeout to ensure response from the auth server
    // It responds slowly at times
    httpTimeout : process.env.HTTP_TIMEOUT || 10000,
    /**
     * Configuration required by openid-client
     */
    issuer : process.env.OPENID_ISSUER || 'https://authx-test.cfinx.com',
    authorization_endpoint: process.env.OPENID_AUTH_ENDPOINT || 'https://authx-test.cfinx.com/oxauth/restv1/authorize',
    token_endpoint: process.env.OPENID_TOKEN_ENDPOINT || 'https://authx-test.cfinx.com/oxauth/restv1/token',
    userinfo_endpoint: process.env.OPENID_USERINFO_ENDPOINT || 'https://authx-test.cfinx.com/oxauth/restv1/userinfo',
    jwks_uri: process.env.OPENID_JWKS_URI || 'https://authx-test.cfinx.com/oxauth/restv1/jwks',
    introspection_endpoint: process.env.OPENID_INTROSPECTION_ENDPOINT || 'https://authx-test.cfinx.com/oxauth/restv1/introspection',
    client_id: process.env.OPENID_CLIENT_ID || '@!FE92.2D7C.D4E2.0C22!0001!FB12.B613!0008!85A6.B4F0.0FB9.B591',//@!98AB.A91A.6542.4C45!0001!BCC2.BB6A!0008!F853.1D2E.C97C.DCC1',
    client_secret: process.env.OPENID_CLIENT_SECRET || 'maRlXjZvw4lWxeuvNV3bLTtU'//f3a0843524e7d3248cf5452835994439'
  }
}
