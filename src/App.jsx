import ProductList from "./ProductList";

function App() {
    const products = [
        {id: 1, name: "Laptop", price: 999.99, category: "Electronics", featured: false },
        {id: 2, name: "Mountain Bike", price: 699.99, category: "Sports Gear", featured: true },
        {id: 3, name: "Kayak", price: 899.99, category: "Sports Gear", featured: true },
        {id: 4, name: "Smartphone", price: 1199.99, category: "Electronics", featured: false },
        {id: 5, name: "Football", price: 29.99, category: "Sports Gear", featured: true },
    ];

    return (
        <>
            <h1>Product List</h1>
            <ProductList products={products} />
        </>
    );
}

export default App;