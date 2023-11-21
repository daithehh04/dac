'use client'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_API || 'https://cms-dac.okhub.tech/graphql',
    headers: {
      'Content-Type': 'application/json'
    },
    next: { revalidate: 3600 }
  }),
  cache: new InMemoryCache()
})
export default client
