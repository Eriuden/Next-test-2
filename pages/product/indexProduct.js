import React from 'react'
import Link from 'next/link'
import { products } from './[productId]'

//Noter surtout le quatrième lien, routing selon l'id

export default function ProductList( {productId} ) {
  return (
    <div>
        <h1>Listes des produits</h1>
        
        {products.map(product => {
          return (
            <div key={product.id}>
              <h2>
                {product.title} {product.price}
              </h2>
            </div>
          )
        })}
    </div>
  )
}

export async function getStaticsProps() {
  const response = await fetch("http://localhost:4000/products")
  const data = await response.json()

  return {
    props: {
      products: data,
    },
    revalidate: 10, 
  }
}


