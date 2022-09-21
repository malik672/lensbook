import React from "react";
import { profiles } from "/home/malik/Desktop/lensbooks/my-app/api/queries/profile";
import Header from "../components/Header";
import Link from "next/link";
import { useState } from "react";
import { ProfileContext } from "../components/ProfileContext";
import { useContext } from "react";


const Profile = () => {
  const [state, setState] = useState();
  const [pfp, setPfp] = useState();
  const [name, setName] = useState();
  const [bio, setBio] = useState();

  const {profile} = useContext(ProfileContext);
 

  const red = async () => {
    const { loading, error, data } = await profiles();
    if (loading !== true) {
      setState(data.profile.coverPicture.original.url);
      setName(data.profile.name);
      setBio(data.profile.bio);
    }
  };
  red();
  return (
    <div>
      <Header />
      <div className="background-color: rgba(17, 24, 39, var(--tw-bg-opacity)); mb-8 transform translate-y-35.4 ...   transform translate-y-19.6 ... ">
        <div style={{ backgroundColor: "black" }}>
          <img
            src={state}
            alt="profile picture"
            style={{ height: "260px", margin: "auto" }}
          />
        </div>
        <div>
          <div className="flex justify-between ... p-10">
            <div className="flex flex-row">
              <img
                src={state}
                style={{ marginTop: "-50px" }}
                className="  bg-gray-900	--tw-bg-opacity: 1;
              background-color: rgba(17, 24, 39, var(--tw-bg-opacity)); rounded-full h-72 w-72 flex items-center justify-center... 
              transform -translate-y-20 ...
              "
              />

              <div>
                <h2 className="ml-10 font-black">{name}</h2>
                <p className="ml-10 break-words">
                  I'mddsnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnddddd
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-row justify-between ...">
                <p className="text-purple-900 text-left ">Verified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="transform -translate-y-10 ... m-10">
        <Link href={""}>
          <a
            className="absolute"
            style={{ marginTop: "-90px", marginLeft: "94px" }}
          >
            edit profile
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
