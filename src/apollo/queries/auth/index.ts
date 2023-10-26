import { gql } from "@apollo/client";

export const SIGNUP = gql(`
mutation AuthUser(
  $email: String!
  $name:String!
  $mobileNumber:String!
  $password: String!
) {
  signup(
    data: {
      email: $email
      name:$name
      mobileNumber:$mobileNumber
      password: $password

    }
  ) {
    accessToken
    user {
      name
      email
    }
    refreshToken
  }
}
`);

export const LOGIN = gql(`
mutation AuthUser(
  $email: String!
  $password: String!
) {
  login(
    data: {
      email: $email
      password: $password
    }
  ) {
    accessToken
    user {
      name
      email
    }
    refreshToken
  }
}
`);

export const GetUser = gql(`
query GetUser {
    me{
    name
    mobileNumber
    email
  }
}`);
