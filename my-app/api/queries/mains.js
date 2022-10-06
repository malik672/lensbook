import { useQuery, gql } from "@apollo/client";
import {client} from "../../apollo-client";

const card = `query MyQuery {
    explorePublications(
      request: {publicationTypes: POST, sortCriteria: LATEST, sources: "lensook", metadata: {}}
    ) {
      items {
        ... on Post {
          id
          appId
          metadata {
            image
            tags
            locale
            name
            media {
              original {
                cover
                size
                url
              }
            }
            description
            content
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
  `

  export const latest = () => {
    return client.query({
      query: gql(card),
    });
  };
  