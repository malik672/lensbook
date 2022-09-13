import PurpButton from "./PurpButton"

function MarketCard({ title, description, buttonName, buttonHandler, buttonURL }) {
    return (
        <div 
        className="shadow-2xl relative text-center text-black pt-4 pb-10 p-8 m-6 mt-4 mb-12 rounded-[40px] bg-slate-50 "
        >
            <p className="text-xl font-bold uppercase pb-2">{title}</p>
            <p>{description}</p>

            {/*BUTTON BEGINS HERE*/}

            <PurpButton 
            buttonName={buttonName}
            buttonHandler={buttonHandler}
            buttonURL={buttonURL}
            />

        </div>
        
    )
}

export default MarketCard
