import { useQuery, gql } from "@apollo/client";
import {client} from "../../apollo-client";


const card = `
query MyQuery {
  explorePublications(
    request: {sortCriteria: LATEST, publicationTypes: POST, limit: "6", sources: "lenspad"}
  ) {
    items {
      ... on Post {
        id
        appId
        metadata {
          content
          description
          image
          name
          tags
        }
        collectModule {
          ... on FreeCollectModuleSettings {
            __typename
            type
          }
          ... on FeeCollectModuleSettings {
            __typename
            contractAddress
            amount {
              value
              asset {
                name
                symbol
              }
            }
            type
          }
        }
        stats {
          totalDownvotes
          totalUpvotes
          totalAmountOfCollects
        }
        profile {
          name
          handle
        }
      }
    }
  }
}
  
    `;

const collect = `
query MyQuery {
  explorePublications(
    request: {sortCriteria: TOP_COLLECTED, publicationTypes: POST, limit: "6", sources: "lenspad"}
  ) {
    items {
      ... on Post {
        id
        appId
        metadata {
          content
          description
          image
          name
          tags
        }
        collectModule {
          ... on FreeCollectModuleSettings {
            __typename
            type
          }
          ... on FeeCollectModuleSettings {
            __typename
            contractAddress
            amount {
              value
              asset {
                name
                symbol
              }
            }
            type
          }
        }
        stats {
          totalAmountOfCollects
          totalDownvotes
          totalUpvotes
        }
        profile {
          handle
          name
        }
      }
    }
  }
}

  
`

export const latest = () => {
  return client.query({
    query: gql(card),
  });
};

export const collected = () => {
    return client.query({
      query: gql(collect),
    });
  };
  