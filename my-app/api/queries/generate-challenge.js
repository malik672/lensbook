import { client } from '../../apollo-client';
import { gql } from '@apollo/client';

const GET_CHALLENGE = `
  query($request: ChallengeRequest!) {
    challenge(request: $request) { text }
  }
`

export const generateChallenge = (address) => {
   return client.query({
    query: gql(GET_CHALLENGE),
    variables: {
      request: {
         address,
      },
    },
  })
}