function MarketCard({ title, description, image, series, author, rating, price, isMintingNow }) {
    return (
        <div className="border border-black">
            <img src={image}></img>
            <p>{rating}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{series}</p>
            <p>{author}</p>
            {isMintingNow && <button onClick={() => {}}>MINTING NOW</button>}
            <p>{price}</p>
        </div>
    )
}

export default MarketCard
