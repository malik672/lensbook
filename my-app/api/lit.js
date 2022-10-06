import LitJsSdk from "lit-js-sdk";
import { client as ipfs } from "./auth";

export const Lit = async (file, contractAddress, pubId) => {
  const chain = "mumbai";
  const win = typeof window !== "undefined" ? window : "";
  const client = new LitJsSdk.LitNodeClient();
  await client.connect();
  win.litNodeClient = client;

  const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(file);
  // const addeds = await ipfs.add(encryptedString);
  // const uris = `https://lenspads.infura-ipfs.io/ipfs/${added.path}`;
  const str = await LitJsSdk.blobToBase64String(encryptedString);
  const key = await LitJsSdk.uint8arrayToString(symmetricKey, "base16");
  const added = await ipfs.add(encryptedString);
  const uri = `https://lenspads.infura-ipfs.io/ipfs/${added.path}`;
  console.log(uri)
  const string = [uri, symmetricKey];
  return string;
};

export const save = async (contractAddress,  symmetricKey) => {
  const chain = "mumbai";
  const win = typeof window !== "undefined" ? window : "";
  const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: "mumbai" });
  const accessControlConditions = [
    {
      conditionType: "evmBasic",
      contractAddress: `${contractAddress}`,
      standardContractType: "ERC721",
      chain: "mumbai",
      method: "balanceOf",
      parameters: [":userAddress"],
      returnValueTest: {
        comparator: ">=",
        value: "1",
      },
    },
  ];
  
  const encryptedSymmetricKey = await win.litNodeClient.saveEncryptionKey({
    accessControlConditions,
    symmetricKey,
    authSig,
    chain,
  });

  return encryptedSymmetricKey;
};

export const decryptString = async (contractAddress, SymmetricKey, file) => {
  const chain = "mumbai";
  const wins = typeof window !== "undefined" ? window : "";
  const accessControlConditions = [
    {
      conditionType: "evmBasic",
      contractAddress: `${contractAddress}`,
      standardContractType: "ERC721",
      chain: "mumbai",
      method: "balanceOf",
      parameters: [":userAddress"],
      returnValueTest: {
        comparator: ">=",
        value: "1",
      },
    },
  ];

 
  const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: "mumbai" });
  const encryptedSymmetricKey = await LitJsSdk.uint8arrayToString(SymmetricKey, "base16");

  const sKey = await wins.litNodeClient.getEncryptionKey({
    accessControlConditions,
    toDecrypt: encryptedSymmetricKey,
    chain,
    authSig,
  });
  
 
  const decryptString = await LitJsSdk.decryptString((file), sKey);
  const fers = decryptString;
  const ves = await LitJsSdk.base64StringToBlob(fers)
  return ves;
};

export const test = async(e) => {
 const red = await fetch(e)
 const data  = await red.blob();
 return data;
}