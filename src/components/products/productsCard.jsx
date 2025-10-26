function ProductsCard ({children , className}) {
    return (
        <>
        <div className={`${className}`} >
            {children}
        </div>
        </>
    )
}

export default ProductsCard