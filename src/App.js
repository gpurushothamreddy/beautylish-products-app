import './App.css';
import { getProductList, getBrandsCount } from './services/products.js';
import React, { useEffect, useState } from "react"

const App = () => {
    const [products, setProducts] = useState([])

    const fetchData = () => {
          getProductList().then(finalProducts =>{
              setProducts(finalProducts);
            })
             
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div data-testid="products-content">
          {products.length > 0 && (
            <ul>
              {products.map(product => (
                <li key={product.product_name}>
                  <div>ProductName: {product.product_name} </div>
                  <div>Brand: {product.brand_name} </div>
                  <div>Price: {product.price} </div>
                </li>
              ))}
            </ul>
          )}
          <div className="productssummary">
            Summary:
            <div>Total number of unique products: {products.length}</div>
            <div>Total number of unique brands: {getBrandsCount(products)}</div>
            <div>Average price: ${products.reduce((partialSum, product) => partialSum + Number(product.price.substring(1, product.price.length)), 0)}</div>
          </div>
        </div>
      )
}
export default App;