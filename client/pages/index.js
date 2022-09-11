import Head from "next/head"
import { useState } from "react"
import styles from "../styles/Home.module.css"
import MarketCard from "../component/MarketCard"
import NftCard from "../component/NftCard"

const nfts = [
    {
        id: 1,
        title: "TITLE",
        description:
            "Lorem ipsum dolor sit amet, adfsdf consectet adipiscing elit, asdsed do eiusmod tempor incididunt ut labore et dolore",
        series: "SERIES",
        author: "Author",
        rating: 75,
        price: 45,
    },
    {
        id: 2,
        title: "TITLE",
        description:
            "Lorem ipsum dolor sit amet, adfsdf consectet adipiscing elit, asdsed do eiusmod tempor incididunt ut labore et dolore",
        series: "SERIES",
        author: "Author",
        rating: 75,
        price: 45,
    },
    {
        id: 3,
        title: "TITLE",
        description:
            "Lorem ipsum dolor sit amet, adfsdf consectet adipiscing elit, asdsed do eiusmod tempor incididunt ut labore et dolore",
        series: "SERIES",
        author: "Author",
        rating: 75,
        price: 45,
    },
]

export default function Home() {
    const [isBoolean, setIsBoolean] = useState(false)

    function handler() {
        console.log("clicked")
        setIsBoolean((currentIsBoolean) => {
            return !currentIsBoolean
        })
        console.log(isBoolean)
    }

    return (
        <>
            <div className="border border-gray-700 bg-gray-500">
                <h1>lensBook</h1>
                <p>Decentralized NFT Books and Novels Publisher & Marketplace</p>
            </div>
            <div className="flex border border-green-700 bg-green-300"
                style={{
                    background: "linear-gradient(223.57deg, #0f5f4b 11.28%, #09152f 111.42%)",
                    boxShadow: "0px 8px 20px 0 rgba(0,0,0,0.1)",
                  }}>
                <MarketCard
                    title="Market"
                    description="Lorem ipsum dolor sit amet, adfsdf consectet adipiscing elit, asdsed do eiusmod tempor incididunt ut labore et dolore"
                    buttonName="MARKET"
                    buttonHandler={() => {}}
                />
                <MarketCard
                    title="Dashboard"
                    description="Lorem ipsum dolor sit amet, adfsdf consectet adipiscing elit, asdsed do eiusmod tempor incididunt ut labore et dolore"
                    buttonName="DASHBOARD"
                    buttonHandler={() => {}}
                />
                <MarketCard
                    title="Publish"
                    description="Lorem ipsum dolor sit amet, adfsdf consectet adipiscing elit, asdsed do eiusmod tempor incididunt ut labore et dolore"
                    buttonName="PUBLISH"
                    buttonHandler={() => {}}
                />
            </div>
            <div className="border border-blue-700 bg-blue-400">
                <p>Minting Now</p>
                <p>view more...</p>
                {nfts.map((nft) => (
                    <NftCard
                        key={nft.id}
                        title={nft.title}
                        description={nft.description}
                        series={nft.series}
                        author={nft.author}
                        rating={nft.rating}
                        price={nft.price}
                        isMintingNow={true}
                    />
                ))}
            </div>
            <div className="border border-black bg-blue-200">
                <p>Top Sellers</p>
                <p>view more...</p>
                {nfts.map((nft) => (
                    <NftCard
                        key={nft.id}
                        title={nft.title}
                        description={nft.description}
                        series={nft.series}
                        author={nft.author}
                        rating={nft.rating}
                        price={nft.price}
                        isMintingNow={false}
                    />
                ))}
            </div>
        </>
    )
}
