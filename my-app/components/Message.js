import React from 'react'
import {Client} from "@xmtp/xmtp-js";
import {Wallet} from "ethers";

const Message = async() => {
  const wallet = Wallet.createRandom();
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  
  const red = async() => {
    const xmtp = await Client.create(wallet)
    return xmtp;
  }
  const blue = await red();
  const conversation = await blue.conversations.newConversations(
    "0x399328BE44205Acb9B99db3d7257548290b25257"
  )

  await conversation.send("open now")

  return (
    <div>Message</div>
  )
}

export default Message;