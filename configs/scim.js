/**
 * Configuration file to hold details of SCIM access to Gluu server
 */
module.exports = {
  baseURL: process.env.SCIM_BASE_URL || 'https://authx-test.cfinx.com/identity/restv1/scim/v2',
  username: process.env.SCIM_USERNAME || 'admin',
  password: process.env.SCIM_PASSWORD || 'think4xbl'
}
