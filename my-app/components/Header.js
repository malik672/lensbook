import Link from "next/link";
import ConnectButton from "./ConnectButton";
import Nav from "./Nav"
import React, {useState, useEffect, useContext} from "react";
import {UserContext} from "./UserContext";
import SearchBar from "./SearchBar";
import SwitchProfile from "./SwitchProfile"

function Header() {
	const {user, setUser} = useContext(UserContext)

	return (
	<div>
		<header className=" z-40 ... bg-black text-white p-20" style={{fontWeight:800, padding:"15px", color:"white", backgroundColor:"#0f172a", fontSize:"17px", position:"fixed", width:"100%", zIndex:"5"}}>
			<div className="flex flex-row justify-between items-center" style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
				<Link href={"/"}>
					<a className="font-sans font-bold text-xl" style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
						lens<span style={{font: "5px", paddingRight:"30px"}}>Book</span>
                        <SearchBar/>
					</a>
				</Link>
				<div className="flex" style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <Nav style={{border:"2px solid black"}}/>
					<ConnectButton/>
					<SwitchProfile/>
				</div>
			</div>
		</header>
	</div>
	)
}

export default Header