import { create } from "ipfs-http-client";
const projectID = process.env.NEXT_PUBLIC_INFURA_IPFS_PROJECT_ID;
const projectSecret = process.env.NEXT_PUBLIC_INFURA_IPFS_PROJECT_SECRET;
const pands = `${projectID}:${projectSecret}`;
export const client = create({
  host: "ipfs.infura.io",
  port:"5001",
  protocol: "https",
  headers: {
    authorization :`Basic ${Buffer.from(pands).toString('base64')}`,
  },
});


