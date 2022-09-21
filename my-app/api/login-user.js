import {getAddress, signText} from "./ether.service.js";
import {generateChallenge} from "./queries/generate-challenge";
import { authenticate } from "./mutations/authenticate.js";

export const login = async ()=> {
    const address = await getAddress();

    const challengeResponse = await generateChallenge(address);

    const signature = await signText(challengeResponse.data.challenge.text);

    const accessTokens = await authenticate(address, signature);
    return accessTokens;
}