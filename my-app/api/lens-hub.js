import { getSigner } from "../utils";
import { ethers } from "ethers";
import {
  LENS_HUB as LENS_HUB_CONTRACT_ADDRESS,
  LENS_PHERIPHERY as LENS_PERIPHERY_CONTRACT,
} from "./api";
import LENS_HUB_ABI from "../abi/abi.json";
import LENS_PERIPHERY_ABI from "../abi/periphery.json";

export const lensHub = () => {
  const lens = new ethers.Contract(
    LENS_HUB_CONTRACT_ADDRESS,
    LENS_HUB_ABI,
    getSigner()
  );
  return lens;
};

// lens periphery contract info can all be found on the deployed
// contract address on polygon.
// not defining here as it will bloat the code example
export const lensPeriphery = () => {
  const lens = new ethers.Contract(
    LENS_PERIPHERY_CONTRACT,
    LENS_PERIPHERY_ABI,
    getSigner()
  );
  return lens;
};
