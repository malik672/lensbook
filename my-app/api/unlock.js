import { ethers } from "ethers";
import { WebService, WalletService } from "@unlock-protocol/unlock-js";
const projectID = process.env.NEXT_POLYGON_MUMBAI;

const networks = {
  80001: {
    unlockAddress: "0x1FF7e338d5E582138C46044dc238543Ce555C963",
    provider: projectID,
  },
};

const provider =  ethers.providers.JsonProvider(networks[80001].provider);

export const run = async() => {
  const eth = typeof window.ethereum != undefined ? window.ethereum : "";

  const walletService = new WalletService(networks);

  await walletService.connect(provider, eth.selectedAddress);

  await walletService.createLock(
    {
      maxNumberOfKeys: 100,
      name: "part",
      expirationDuration: 1000000000000,
      keyPrice: "0.01",
    },
    (error, hash) => {
      console.log({hash})
    }
  )
}