import { useQuery, gql } from "@apollo/client";
import {client} from "../../utils";

export const getChallenge = gql`
 query($request: ChallengeRequest!) {
   challenge(request: $request) { text }
 }
`
export const authentication = gql`
mutation($request: SignedAuthChallenge!) { 
  authenticate(request: $request) {
    accessToken
    refreshToken
  }
}
`

;

export default {
  getChallenge,
  authentication
};