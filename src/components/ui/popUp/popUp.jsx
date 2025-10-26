function PopUp ({children , className}) {
    return (
        <>
        <div className={`px-5 py-1 bg-green-400 fixed top-10 left-2 z-50 ${className}`}>{children}</div>
        </>
    )
}

export default PopUp