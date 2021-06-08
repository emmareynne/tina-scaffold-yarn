import { Client, DEFAULT_LOCAL_TINA_GQL_SERVER_URL } from 'tina-graphql-gateway'

const createClient = (preview: boolean, getTokenFn?: () => string) =>
  new Client({
    realm: process.env.NEXT_PUBLIC_REALM_NAME || '',
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
    redirectURI: 'http://localhost:3000',
    customAPI: DEFAULT_LOCAL_TINA_GQL_SERVER_URL,
    getTokenFn,
    tokenStorage: getTokenFn ? 'CUSTOM' : 'MEMORY',
  })

export default createClient