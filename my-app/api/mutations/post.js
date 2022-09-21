import { createClient } from '../../apollo-client';
import { gql } from '@apollo/client'

const CREATE_POST_TYPED_DATA = `
  mutation($request: CreatePublicPostRequest!) { 
    createPostTypedData(request: $request) {
      id
      expiresAt
      typedData {
        types {
          PostWithSig {
            name
            type
          }
        }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        contentURI
        collectModule
        collectModuleInitData
        referenceModule
        referenceModuleInitData
      }
     }
   }
 }
`

export const createPostTypedData = async(createPostTypedDataRequest) => {
  const red = await createClient();
   return red.mutate({
    mutation: gql(CREATE_POST_TYPED_DATA),
    variables: {
      request: createPostTypedDataRequest
    },
  })
  console.log(red)
}
