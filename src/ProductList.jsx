const STAR ="⭐"
function ProductList({ products }){
    return (
        <ul>
            {products.map(product =>(
                <li key={product.id}>
                    {product.name} - {product.price} - {product.category} 
                    {product.featured && ` ${STAR} cleFeatured`}
                </li>
            ))}
        </ul>
    );
}

export default ProductList;