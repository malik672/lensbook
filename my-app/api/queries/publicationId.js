import { useQuery, gql } from "@apollo/client";
import {client} from "../../utils";

const vee = (hash) => {
    const vee = `query MyQuery {
        publication(request: {txHash: "${hash}"}) {
          ... on Post {
            id
            appId
          }
        }
      }
      `
    return vee;
}

const fee = (id) => {
  const vee = `query MyQuery {
    publication(request: {publicationId: "${id}"}) {
      ... on Post {
        id
        collectNftAddress
        metadata {
          content
          attributes {
            value
          }
        }
      }
    }
  }`
  
  
  return vee;
}

export const publicationId = async(hash) => {
    const red = await vee(hash)
    return client.query({
     query: gql(red),
   })
 }

 export const collectNft = async(id) => {
  const red = await fee(id)
  return client.query({
   query: gql(red),
 })
}