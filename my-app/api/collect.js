import { gql } from "@apollo/client";
import { createClient } from "./api";
import {lensHub} from "./lens-hub"
import {signedTypeData, splitSignature} from "./ether.service"
import {getSigner as getAddressFromSigner} from "../utils";


const CREATE_COLLECT_TYPED_DATA = `
  mutation($request: CreateCollectRequest!) { 
    createCollectTypedData(request: $request) {
      id
      expiresAt
      typedData {
        types {
          CollectWithSig {
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
        pubId
        data
      }
     }
   }
 }
`;

// TODO typings
const createCollectTypedData = async(createCollectTypedDataRequest) => {
    return (await createClient()).mutate({
      mutation: gql(CREATE_COLLECT_TYPED_DATA),
      variables: {
        request: createCollectTypedDataRequest,
      },
    });
  };

export const collect = async (home) => {
    const reds = typeof window !== "undefined" ? window.ethereum.selectedAddress : "";
    const address = await getAddressFromSigner();
    console.log(address.address, reds);
    const result = await createCollectTypedData(home)

    const typedData = result.data.createCollectTypedData.typedData;

    const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
    console.log('collect: signature', signature);
  
    const { v, r, s } = splitSignature(signature);
    const red = await lensHub()
    
    const tx = red.collectWithSig(
      {
        collector: reds,
        profileId: typedData.value.profileId,
        pubId: typedData.value.pubId,
        data: typedData.value.data,
        sig: {
          v,
          r,
          s,
          deadline: typedData.value.deadline,
        },
      },
      { gasLimit: 1000000 }
    );
    return tx;
}