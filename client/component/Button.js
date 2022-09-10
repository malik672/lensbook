export default function Button({ buttonName, buttonHandler }) {
    return (
        <>
            <div>My button</div>
            <button
                className="border border-red-600"
                onClick={() => {
                    buttonHandler()
                }}
            >
                {buttonName}
            </button>
        </>
    )
}
