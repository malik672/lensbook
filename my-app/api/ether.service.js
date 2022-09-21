import { ethers, utils } from "ethers";
import omitDeep from "omit-deep";

// This code will assume you are using MetaMask.
// It will also assume that you have already done all the connecting to metamask
// this is purely here to show you how the public API hooks together
const home = typeof window !== "undefined" ? window.ethereum : "";

export const  ethersProvider = () => {
  const ethersProvide = new ethers.providers.Web3Provider(home);
  return ethersProvide
}

export const getAddress = async() => {
  const accounts = await home.request({method: "eth_accounts"});
  return accounts[0];
}

export const getSigner = async() => {
  return await ethersProvider().getSigner();
}

export const getAddressFromSigner = async() => {
return await getSigner().address;
}

export const init = async() => {
  const accounts = await window.ethereum.request({ method: 'eth_accounts' });
  return accounts[0];
}

export const signedTypeData = async(domain, types, value) => {
  const signer = await getSigner();
  // remove the __typedname from the signature!
  return signer._signTypedData(
    omitDeep(domain, '__typename'),
    omitDeep(types, '__typename'),
    omitDeep(value, '__typename')
  );
}

export const splitSignature = (signature) => {
  return utils.splitSignature(signature)
}

export const sendTx = async(transaction) => {
  const signer = await ethersProvider().getSigner();
  return signer.sendTransaction(transaction);
}

export const signText = async(text) => {
  const red = await getSigner();
  return await ethersProvider().getSigner().signMessage(text)
}