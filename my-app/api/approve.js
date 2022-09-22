import { gql } from '@apollo/client/core';
import {createClient} from "./api";
import {getAddressFromSigner, sendTx} from "./ether.service";


const MODULE_APPROVAL_DATA = `
  query($request: GenerateModuleCurrencyApprovalDataRequest!) {
    generateModuleCurrencyApprovalData(request: $request) {
      to
   	  from
      data
    }
  }
`;

// TODO typings!
const getModuleApprovalData = async(moduleApprovalRequest) => {
 const red = await createClient();
  return red.query({
    query: gql(MODULE_APPROVAL_DATA),
    variables: {
      request: moduleApprovalRequest,
    },
  });
};

export const approveModule = async(home) => {
  try{
    const address = await getAddressFromSigner();
    const result = await getModuleApprovalData(home);
  
    const generateModuleCurrencyApprovalData =
    result.data.generateModuleCurrencyApprovalData;
  
    const tx = await sendTx({
      to: generateModuleCurrencyApprovalData.to,
      from: generateModuleCurrencyApprovalData.from,
      data: generateModuleCurrencyApprovalData.data,
    });
  
    await tx.wait();
    return tx;
  }catch(e){
    console.error(e)
  }
}