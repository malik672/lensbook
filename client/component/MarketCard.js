function MarketCard({ title, description, buttonName, buttonHandler }) {
    return (
        <div className="border border-black">
            <p>{title}</p>
            <p>{description}</p>
            <button
                onClick={() => {
                    buttonHandler()
                }}
            >
                {buttonName}
            </button>
        </div>
    )
}

export default MarketCard
