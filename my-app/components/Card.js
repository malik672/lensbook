import React, { useEffect } from 'react'
import {useState} from "react";
import {latest,collected} from "../api/queries/main.js"

const Card = () => {
 const [state, setState] = useState([]);
 useEffect(() => {
    const red = async() => {
        const data = await latest();''
        // console.log(data.data.explorePublications.items.length)
        if(data.data.explorePublications.items.length){
          setState(data.data.explorePublications.items )
          console.log(data.data.explorePublications.items)
        }
    }
    red()
 }, [state])
  console.log(state[5])
  return (
    <div>
      {state.map((a) => (
           <div>
               {a.metadata.image !== null ? <img src= {`https://lenspad.infura-ipfs.io${a.metadata.image}`} alt="d"/>: <img src="https://media.istockphoto.com/photos/collection-of-old-books-in-library-picture-id1306307586?k=20&m=1306307586&s=612x612&w=0&h=UiNBgA0tPNqKwXcRP39g5TjxvMbYrcR5tbEwqZsHqp8=" alt="books"/>}
               <div className="ranking">
                   <div>Dislike: {a.stats.totalDownvotes}</div>
                   <div>Likes: {a.stats.totalUpvotes}</div>
                   <div>Reads: {a.stats.totalAmountOfCollects}</div>
               </div>
               <div><h2>{a.metadata.name}</h2></div>
               {a.profile.name !== null ? <p>{a.profile.name}</p> : <p>{a.profile.handle}</p>}
               <p>{a.metadata.description}</p>
               <p>{a.metadata.content}</p>
               {a.metadata.tags.map((tag) => ( 
                 <div>
                   <p>{tag}</p>
                 </div>
               ))}
               {a.collectModule.type == "FreeCollectModule" ? 
               <div>
                  <p>MINTING NOW</p>
                  <p>FREE</p>
               </div> 
               : 
               <div>
                  <p>MINTING NOW</p>
                  <p>DCJDCJDJC</p>
               </div>

               }
           </div>
      ))}
    </div>
  )
}

export default Card