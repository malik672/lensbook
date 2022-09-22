import LitJsSdk from "@lit-protocol/sdk-browser";
import { client as auth } from "./auth";

export const Lit = async (strings) => {
  const win = typeof window !== "undefined" ? window : "";
  const client = new LitJsSdk.LitNodeClient();
  await client.connect();
  win.litNodeClient = client;

  const { encryptedString, symmetricKey } = LitJsSdk.encryptString(strings);
  const str = await LitJsSdk.blobToBase64String(encryptedString);
  const key = await LitJsSdk.uint8arrayToString(symmetricKey, "base16");
  const string = [str, key];
  return string;
};

const save = async (contractAddress, key) => {
  const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: "mumbai" });
  const conditions = [
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
    accessControlConditions: conditions,
    tear,
    authSig,
    chain,
  });

  return encryptedSymmetricKey;
};

const decryptString = async (contractAddress, key, file) => {
  const conditions = [
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

  const fer = await LitJsSdk.base64StringToBlob(file);
  const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: "mumbai" });

  const sKey = await wins.LitNodeClient.getEncryptionKey({
    accessControlConditions,
    toDecrypt: key,
    chain,
    authSig,
  });

  const decryptString = await LitJsSdk.decryptString(fer, sKey);
  const fers = await LitJsSdk.base64StringToBlob(decryptString);
  return fers;
};
