const ProductCard= ({image,price,category,description})=>{
    return(
        <div>
            <img src={image} alt={price} />
            
            <h2>{category} {price}</h2>
            <h3>{description}</h3>
        </div>
    )
}
export default ProductCard;