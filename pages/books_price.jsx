import React, { useState, useEffect} from "react";
import Product from "../components/Product";
import Hero from "../components/Hero"


import { useConnection, useWallet } from "@solana/wallet-adapter-react";
const books_price = () => {
  const [products, setProducts] = useState([]);
  const { publicKey, sendTransaction } = useWallet();
  useEffect(() => {
    if (publicKey) {
      fetch(`/api/fetchProducts`)
        .then(response => response.json())
        .then(data => {
          setProducts(data);
          console.log("Products", data);
        });
    }
  }, [publicKey]);
  return (<>
  <Hero heading='Scroll Down' message='download to enjoy your book instantly.' />
    <div className="products-container">
      
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
    
    </>
  )
}

export default books_price