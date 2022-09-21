import { ApolloClient, InMemoryCache } from "@apollo/client";

const win = typeof window !== 'undefined' ? window : "";
// const sess = win.sessionStorage.getItem(win.ethereum.selectedAddress)

export const client = new ApolloClient({
    uri: "https://api-mumbai.lens.dev",
    cache: new InMemoryCache(),
});

export default client;
