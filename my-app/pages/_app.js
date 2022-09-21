import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { useState, useEffect } from "react";
import { UserContext } from "../components/UserContext";
import { ProfileContext } from "../components/ProfileContext";
import { infoContext } from "../components/infoContext";
import { ethers, providers } from "ethers";
import "@rainbow-me/rainbowkit/styles.css";
import { useRouter } from "next/router";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { RainbowKitSiweNextAuthProvider } from "@rainbow-me/rainbowkit-siwe-next-auth";
import { SessionProvider } from "next-auth/react";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { parseJwt, refreshAuthToken } from "../utils";
import { createClient as createClients, signIn } from "../api/api";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { login } from "../api/login-user";

function MyApp({ Component, pageProps }) {
  const [connected, setConnected] = useState(true);
  const [userAddress, setUserAddress] = useState();
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();
 
  const [info, setInfo] = useState();
  const router = useRouter();



  useEffect(() => {
    refreshAuthToken();
    const checkConnection = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const addresses = await provider.listAccounts();
      if (addresses.length) {
        setConnected(true);
        setUserAddress(addresses[0]);
      } else {
        setConnected(false);
      }
    };

    const red = typeof window !== "undefined" ? window.localStorage : "";
    const reds = typeof window !== "undefined" ? window.ethereum : "";
    if (red.getItem(reds.selectedAddress) == null) {
      signIn();
    }
    checkConnection();
    listenForRouteChangeEvents();
  }, []);

  async function listenForRouteChangeEvents() {
    router.events.on("routeChangeStart", () => {
      refreshAuthToken();
    });
  }

  async function signIn() {
    const win = typeof window !== "undefined" ? window : "";
    const accounts = await  win.ethereum.request({
      method: "eth_accounts",
    });
    const STORAGE_KEY = accounts[0]
    try {
      const red = await login();
      const { accessToken, refreshToken } = red.data.authenticate;
      console.log(refreshToken)
      console.log(parseJwt(refreshToken))
      const accessTokenData = parseJwt(accessToken);
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          accessToken,
          refreshToken,
          exp: accessTokenData.exp,
        })
      );
    } catch (err) {
      console.error(err, "can't sign in");
    }
  }
  const getSiweMessageOptions = async() => ({
    statement: "Sign in to my LensBook app",
  });

  const { chains, provider } = configureChains(
    [chain.polygonMumbai],
    [
      alchemyProvider({ apiKey: "f72IDQikavapQ0ro6kEq-zATKL-2L5hp" }),
      publicProvider(),
    ]
  );
  const { connectors } = getDefaultWallets({
    appName: "LensBook",
    chains,
  });
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <UserContext.Provider value={{ user, setUser }}>
        <infoContext.Provider value={{ info, setInfo }}>
          <WagmiConfig client={wagmiClient}>
            {/* <SessionProvider refetchInterval={0} session={pageProps.session}> */}
            {/* <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions}> */}
            <RainbowKitProvider
              chains={chains}
              theme={darkTheme({
                accentColor: "#7b3fe4",
                accentColorForeground: "white",
                borderRadius: "small",
                fontStack: "system",
                overlayBlur: "small",
              })}
            >
              <Component {...pageProps} />
            </RainbowKitProvider>
            {/* </RainbowKitSiweNextAuthProvider> */}
            {/* </SessionProvider> */}
          </WagmiConfig>
        </infoContext.Provider>
      </UserContext.Provider>
    </ProfileContext.Provider>
  );
}

export default MyApp;
