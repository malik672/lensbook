function MarketCard({ title, description, buttonName, buttonHandler }) {
    return (
        <div 
        className="relative text-center text-black w-[425px] pt-4 pb-10 p-8 m-8 mt-14 mb-14 rounded-[40px] bg-slate-50 "
        style={{ boxShadow: "0px 24px 32px 0 rgba(0,0,0,0.2)" }}
        >
            <p className="text-xl font-bold uppercase pb-2">{title}</p>
            <p>{description}</p>

            {/*BUTTON BEGINS HERE*/}

            <div
            className="absolute flex flex-col flex-grow-0 flex-shrink-0 gap-2.5 rounded -bottom-8 right-1/2 translate-x-1/2"
            style={{
                background: "linear-gradient(to bottom right, #3a42e1 2.88%, #620c90 98.14%)",
                boxShadow: "0px 16px 24px 0 rgba(0,0,0,0.15)",
                }}
                >
                <div className="p-4">
                    <button 
                        onClick={() => {
                            buttonHandler()
                        }}
                        >
                    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-slate-200">{buttonName}</p>
                    </button>
                </div>                
            
            </div>

        </div>
        
    )
}

export default MarketCard
