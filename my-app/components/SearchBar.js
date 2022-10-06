import {useState, useEffect} from "react";
import {search as searchs, cSearch} from "/home/malik/Desktop/lensbooks/my-app/api/queries/search.js";

export default function searchBar({color}) {
   const [state, setState] = useState();
   const [val,setVal] = useState();
    
   async function red(vals){
    const red  = await searchs(vals)
    console.log(red)
   }

    return(
      <div>
          <input type="search" onChange={(e) => (red(e.target.value))} style={{borderRadius:"16px", border:"0px", padding:"8px", width:"265px", backgroundColor:"#1e293b", color:"white", fontSize:"10px"}}/>
      </div>
    )
}