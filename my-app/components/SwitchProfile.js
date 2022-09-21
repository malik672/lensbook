import React from "react";
import { useEffect, useState, useContext } from "react";
import { swProfiles } from "../api/queries/profile";
import { ProfileContext } from "./ProfileContext"
import { ethers } from "ethers";

const SwitchProfile = () => {
  const [state, setState] = useState([]);
  const {profile, setProfile} = useContext(ProfileContext)

  const blue = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    if (accounts.length > 0) {
      const account = accounts[0];

      const year = await swProfiles(account);
      const { loading, data } = year;

      // console.log(data.profiles.items)
      setState(data.profiles.items);
    } else {
      alert("connect your wallet");
    }
  };

  const green = async (e) => {
    // const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
   
    setProfile(e.target.value)
    e.preventDefault();
  };

  return (
    <div>
      {/* <button onClick={(e) => (blue())}>opens</button>
      {state.map((a) => (
        console.log(a)
      ))} */}
      <select className="m-8 " style={{backgroundColor:"#0f172a", border:"2px solid white"}} onClick={(e) => blue()}>
        {state.map((a) => (
         <>
          <option selected>select Your profile</option>
          <option
            value={a.id}
            onClick={(e) => {
              green(e);
            }}
           
          >
            {a.handle}
          </option>
          </>
        ))}
      </select>
    </div>
  );
};

export default SwitchProfile;
