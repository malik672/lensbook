import { useQuery, gql } from "@apollo/client";
import {client} from "../../utils";


const searchs =(val) => {
    const vee = `query MyQuery {
        search(request: {query: "${val}", type: PUBLICATION, sources: ""}) {
          ... on PublicationSearchResult {
            __typename
            items {
              ... on Post {
                id
                appId
                createdAt
                metadata {
                  content
                  description
                  tags
                  locale
                  image
                }
                stats {
                  totalAmountOfCollects
                  totalDownvotes
                  totalUpvotes
                }
              }
            }
            pageInfo {
              next
              prev
              totalCount
            }
          }
        }
      }
      `
      return vee
}

const cSearchs = (val, cursor) => {
    const vee = `query MyQuery {
        search(request: {query: "${val}", type: PUBLICATION, sources: "", cursor: "${cursor}"}) {
          ... on PublicationSearchResult {
            __typename
            items {
              ... on Post {
                id
                appId
                createdAt
                metadata {
                  content
                  description
                  tags
                  locale
                  image
                }
                stats {
                  totalAmountOfCollects
                  totalDownvotes
                  totalUpvotes
                }
              }
            }
            pageInfo {
              next
              prev
              totalCount
            }
          }
        }
      }
      `
      return vee;
}

export const search = async(inputVal) => {
  const red = await searchs(inputVal);
  return client.query({
    query: gql(red),
  })
}

export const cSearch = async(inputVal, cursor) => {
  const red = await cSearch(inputVal, cursor);
  return client.query({
    query: gql(red)
  })
}