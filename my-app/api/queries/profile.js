import { useQuery, gql } from "@apollo/client";
import {client} from "../../apollo-client";


const profile = (id) => {
    const profile = `query MyQuery {
        profile(request: {profileId: "0x4302"}) {
          bio
          coverPicture {
            ... on NftImage {
              __typename
              contractAddress
              uri
            }
            ... on MediaSet {
              __typename
              original {
                cover
                url
              }
              medium {
                url
              }
              small {
                url
              }
            }
          }
          followModule {
            ... on FeeFollowModuleSettings {
              __typename
              amount {
                value
                asset {
                  address
                  name
                }
              }
              type
            }
            ... on ProfileFollowModuleSettings {
              __typename
              contractAddress
              type
            }
            ... on RevertFollowModuleSettings {
              __typename
              type
            }
            ... on UnknownFollowModuleSettings {
              __typename
              type
            }
          }
          id
          picture {
            ... on NftImage {
              __typename
              uri
              contractAddress
            }
            ... on MediaSet {
              __typename
              medium {
                cover
                url
              }
              original {
                url
                size
              }
              small {
                url
                size
              }
            }
          }
          stats {
            totalCollects
            totalFollowers
            totalFollowing
            postsTotal(forSources: "lenspad")
            publicationsTotal(forSources: "lenspad")
          }
          isFollowedByMe
          metadata
          name
          ownedBy
          onChainIdentity {
            worldcoin {
              isHuman
            }
          }
          isFollowing(who: "0x4304")
        }
      }
      `
      return profile;
}

const sprofiles = (address) => {
  const red = `query MyQuery {
    profiles(request: {ownedBy: "${address}"}) {
      items {
        handle
        id
        name
      }
    }
  }
  `
  return red;
}

export const profiles = async(id) => {
    const red = await profile(id);
    return client.query({
      query: gql(red),
    })
  }
  
  export const swProfiles = async(address) => {
    const red = await sprofiles(address);
    return client.query({
      query:gql(red),
    })
  }