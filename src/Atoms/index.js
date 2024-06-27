const ProductCard= ({image,price})=>{
    return(
        <div>
            <img src={image} alt={price}/>
            <h2>{price}</h2>
        </div>
    )
}
export default ProductCard;