import Link from "next/link"

function Nav() {
	return (
		<nav >
			<Link href={"/Home"} >
				<a className="px-26" style={{paddingLeft:"7px", paddingRight:"7px"}}>Home</a>
			</Link>
			<Link href={"/Market"} >
				<a className="px-16"  style={{paddingLeft:"7px", paddingRight:"7px"}}>Market</a>
			</Link>
			<Link href={"/Publish"} >
				<a className="px-16"  style={{paddingLeft:"7px", paddingRight:"7px"}}>Publish</a>
			</Link>
			<Link href={"/Profile"} >
				<a className="px-16"  style={{paddingLeft:"7px", paddingRight:"7px"}}>Profile</a>
			</Link>
		</nav>
	)
}

export default Nav;