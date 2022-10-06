import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import {latest} from "../api/queries/mains.js"
import { useEffect } from "react";

const Market = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    const red = async () => {
      const data = await latest();
      ("");
      // console.log(data.data.explorePublications.items.length)
      if (data.data.explorePublications.items.length) {
        setState(data.data.explorePublications.items);
        console.log(data.data.explorePublications.items);
      }
    };
    red();
  }, [state]);
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "65px" }}>
        <div className="flex flex-col items-center justify-between">
          <h1>Marketplace</h1>
          <p>/</p>
          <div
            className="flex flex-row justify-around"
            style={{ width: "0%", backgroundColor: "#0c413f" }}
          >
            <button>Recently Listed</button>
            <button>Price</button>
            <SearchBar />
            <div>
              <p>Verified</p>
            </div>
          </div>
          <div className="h-64 grid grid-rows-3 grid-flow-col gap-4">
            {state.map((a) => (
             <div className="max-w-sm rounded overflow-hidden shadow-lg">
               {a.metadata.image !== null ? <img className="w-full" src= {`https://lenspad.infura-ipfs.io${a.metadata.image}`} alt="d"/>: <img src="https://media.istockphoto.com/photos/collection-of-old-books-in-library-picture-id1306307586?k=20&m=1306307586&s=612x612&w=0&h=UiNBgA0tPNqKwXcRP39g5TjxvMbYrcR5tbEwqZsHqp8=" alt="books"/>}
               <div className="px-6 py-4">
                 <div className="font-bold text-xl mb-2">
                  <h2>{a.metadata.name}</h2>
                 </div>
                 <p className="text-gray-700 text-base">
                   {a.metadata.description}
                 </p>
               </div>
             </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
