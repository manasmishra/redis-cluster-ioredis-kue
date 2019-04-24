module.exports = {
  region: (process.env.COGNITO_REGION || 'us-east-1'),
  cognitoIdentityPoolID: (process.env.COGNITO_IDENTITY_POOL_ID || 'us-east-1:0713d216-3770-4948-8eb6-89e62258d0fe'),
  userPoolID: (process.env.COGNITO_USER_POOL_ID || 'us-east-1_a2Jh1S78n'),
  clientID: (process.env.COGNITO_CLIENT_ID || '2a7gr8nfk8tggjcqbuipu4dai4'),
  mockSeverBaseUrl: (process.env.MOCK_SERVER_URL || 'http://mocking.cfinx.com'),
  mock: (process.env.MOCK || false)
}