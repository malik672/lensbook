import omitDeep from "omit-deep";
import { ethers, utils } from "ethers";
import { refreshAuth as refreshMutation } from "./api/mutations/refresh";
import { gql } from "@apollo/client";

const win = typeof window !== "undefined" ? window : "";
const wins = typeof window !== "undefined" ? window.ethereum : "";


export const STORAGE_KEY = wins.selectedAddress;


export function trimString(string, length) {
  if (!string) return null;
  return string.length < length ? string : string.substr(0, length - 1) + "...";
}

export function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export async function refreshAuthToken() {
  const wins = typeof window !== "undefined" ? window.localStorage : "";
  const token = JSON.parse(wins.getItem(STORAGE_KEY));
  if (!token) return;
  // try {
    const ref = token.refreshToken
    
  const authData = await refreshMutation(ref);
 
  if (!authData.data) return;

  const { accessToken, refreshToken } = authData.data.refresh;
  const exp = parseJwt(refreshToken).exp;

  wins.setItem(
    STORAGE_KEY,
    JSON.stringify({
      accessToken,
      refreshToken,
      exp,
    })
  );

  return {
    accessToken,
  };
}

export function getSigner() {
  const provider = new ethers.providers.Web3Provider(win.ethereum);
  return provider.getSigner();
}

export function signTypeData(domain, types, value) {
  const signer = getSigner();
  return signer._signTypedData(
    omitDeep(domain, "_typename"),
    omitDeep(types, "_typename"),
    omitDeep(value, "_typename")
  );
}

export function splitSignature(signature) {
  return utils.splitSignature(signature);
}

export default {
  parseJwt,
  refreshAuthToken,
  signTypeData,
  splitSignature,
  getSigner,
  trimString,
};
