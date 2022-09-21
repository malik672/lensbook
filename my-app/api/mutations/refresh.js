import { gql } from '@apollo/client/core'
import { client } from "../../apollo-client";

const REFRESH_AUTHENTICATION = `
  mutation($request: RefreshRequest!) { 
    refresh(request: $request) {
      accessToken
      refreshToken
    }
 }
`

export const refreshAuth = (refreshToken) => {
    return client.mutate({
     mutation: gql(REFRESH_AUTHENTICATION),
     variables: {
       request: {
         refreshToken,
       },
     },
   })
 }