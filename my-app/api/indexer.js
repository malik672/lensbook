import {pollUntilIndexed} from "./queries/indexed";
import {sendTx} from "./ether.service";

export const index = async(txHash) => {
    await pollUntilIndexed(txHash);
}