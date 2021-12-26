import gql from 'graphql-tag'

export const UPLOAD_FILE = gql`
  mutation ($file: String!) {
    file_upload(base64String: $file) {
      value
    }
  }
`
