module.exports = {
  agent: 'csfx-serv-core',
  wallet: {
    baseURL: (process.env.WALLET_BASE_URL || 'http://localhost:3002'),
  },
  core: {
    baseURL: (process.env.CORE_BASE_URL || 'https://api-develop.cfinx.com'),
  },
  externalMarket: {
    baseURL: (process.env.COIN_MARKET_BASE_URL || 'https://api.coinmarketcap.com'),
    authToken: (process.env.COIN_MARKET_AUTH_TOKEN || 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU1MTQ1MzhjLTczYjUtNGIzNS04ZjU5LTA4Zjg1Yjg5OWVlYSIsImlhdCI6MTUzMTIyNTQ4OSwiZXhwIjoxNTMzOTAzODg5fQ.gG_yyBKNI7pLjeZ8S2EiQBd1Sz-AfU4qdm5Ysa5FMA4'),
    currency: {
      btc: 1,
      ltc: 2,
      eth: 1027,
      bch: 1831 }
    }
  }
