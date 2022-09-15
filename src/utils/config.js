const API_KEY = process.env.REACT_APP_API_KEY

const config = {
  apiData: {
    baseUrl: `https://fortniteapi.io/`,
    headers: {
      authorization: API_KEY,
      'Content-Type': 'application/json',
    },
  },
}

export default config
