import { onError } from '@apollo/client/link/error'

export default function ({ app }) {
  const httpEndpoint = process.env.GRAPHQL_ENDPOINT

  const link = onError(({ graphQLErrors }) => {
    graphQLErrors.forEach(({ extensions }) => {
      app.$errorHandler(extensions.code)
    })
  })

  return {
    link,
    httpEndpoint,
  }
}
