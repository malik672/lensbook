import { useQuery, gql } from "@apollo/client";
import { client } from "../../apollo-client.js";

const red = (profile, address) => {
  const fee = `query MyQuery {
      publications(
        request: {collectedBy: "${address}", publicationTypes: POST, profileId: "${profile}"}
      ) {
        items {
          ... on Post {
            id
            appId
            collectNftAddress
            stats {
              totalAmountOfCollects
              totalDownvotes
              totalUpvotes
            }
            metadata {
              image
              contentWarning
              name
              tags
              locale
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
    `;

  return fee;
};

const blue = (profile) => {
  const red = `query MyQuery {
    publications(
      request: {profileId: "${profile}", publicationTypes: POST, sources: "lensook"}
    ) {
      items {
        ... on Post {
          id
          appId
          metadata {
            image
            locale
            name
          }
        }
      }
    }
  }
  `
}

const tear = (profile) => {
  const ter = `query MyQuery {
    profile(request: {profileId: "${profile}"}) {
      stats {
        id
        totalFollowers
        totalPosts
        totalPublications
        totalCollects
        totalFollowing
      }
    }
  }
  `
  return ter
}

export const userPublication = async (profile, address) => {
  const reds = await red(profile, address);
  return client.query({
    query: gql(reds),
  });
};

export const userPublished = async () => {
  const reds = await blue(profile);
  return client.query({
    query: gql(reds),
  });
};

export const stats = async(profile) => {
  const reds = await tear(profile);
  return client.query({
    query: gql(reds),
  });
}
