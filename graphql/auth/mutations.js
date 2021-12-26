import gql from 'graphql-tag'

export const REGISTER_USER = gql`
  mutation ($user: RegisterUser!) {
    register(user: $user) {
      value
    }
  }
`
