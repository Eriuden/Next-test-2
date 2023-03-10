import React from 'react'
import Link from 'next/link'

//Noter surtout le quatrième lien, routing selon l'id

export default function ProductList( {productId} ) {
  return (
    <div>
        <Link href="/">
          Home
        </Link>
        
        <ul>
            <li>
              <Link href="/product/1">Produit 1</Link>
              </li>
            <li>
              <Link href="/product/2">Produit 2</Link>
              </li>
            <li>
              <Link href="/product/3">Produit 3</Link>
              </li>
            <li>
              <Link href={`/product/${productId}`}>Produit {productId}</Link>
            </li>
        </ul>
    </div>
  )
}
