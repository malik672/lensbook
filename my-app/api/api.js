import { client } from "../apollo-client";
import { STORAGE_KEY } from "../utils";
import { useQuery, ApolloClient, InMemoryCache } from "@apollo/client";
import { refreshAuthToken } from "../utils";
import { getChallenge, authentication } from "./queries/get-user-profile";
import { ethers } from "ethers";

const win = typeof window !== "undefined" ? window : "";
const wins = typeof window !== "undefined" ? window.ethereum : "";
export const API_URL = "https://api-mumbai.lens.dev";
export const LENS_HUB = "0x60Ae865ee4C725cd04353b5AAb364553f56ceF82";
export const LENS_PHERIPHERY = "0xD5037d72877808cdE7F669563e9389930AF404E8";

export const basicClient = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export async function createClient() {
  const winl = typeof window !== "undefined" ? window.localStorage : "";
  const storageData = JSON.parse(winl.getItem("0x30be4d758d86cfb1ae74ae698f2cf4ba7dc8d693"));
  if (storageData) {
    try {
      const refresh = storageData.refreshToken
      const { accessToken } = await refreshAuthToken(refresh);
      const athClient = new ApolloClient({
        uri: API_URL,
        cache: new InMemoryCache(),
        headers: {
          "x-access-token": `Bearer ${accessToken}`,
        },
      });
      return athClient;
    } catch (error) {
      console.error(error)
    }
  }else{
    console.log('d')
  }
}

const generateChallenge = async (address) => {
  return await (
    await createClient()
  ).query({
    query: getChallenge,
    variables: {
      request: {
        address,
      },
    },
  });
};

const authenticate = async (address, signature) => {
  return await (
    await createClient()
  ).mutate({
    mutation: authentication,
    variables: {
      request: {
        address,
        signature,
      },
    },
  });
};

export async function signIn() {
  const ethersProvider = new ethers.providers.Web3Provider(wins);

  const getAddress = async () => {
    const accounts = await wins.request({ method: "eth_requestAccounts" });
    return accounts[0];
  };

  const signText = async(text) => {
    return ethersProvider.getSigner().signMessage(text);
  };

  //address of the connected wallet
  const address = await getAddress();

  //request challenge from the server
  const challengeResponse = await generateChallenge(address);

  //sign the text
  const signature = await signText(challengeResponse.data.challenge.text);
  const accessTokens = await authenticate(address, signature);
  console.log(accessTokens);
  return accessTokens;
}

export default {
  createClient,
  STORAGE_KEY,
  signIn,
};
