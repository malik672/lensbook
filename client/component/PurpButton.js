function PurpButton({ buttonName, buttonHandler, buttonURL }) {
    return (
       <div
            className="absolute flex flex-col flex-grow-0 flex-shrink-0 gap-2.5 rounded -bottom-8 right-1/2 translate-x-1/2"
            style={{
                background: "linear-gradient(to bottom right, #3a42e1 2.88%, #620c90 98.14%)",
                boxShadow: "0px 16px 24px 0 rgba(0,0,0,0.15)",
                }}
        >
            <button
                onClick={() => {
                buttonHandler
                }}
            >
                <div className="p-4">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-slate-200">{buttonName}</p>
                </div>
            </button>                
        </div>
        
    )
}

export default PurpButton
