import React from 'react'
import { useRouter } from 'next/router'

export const products = ({products}) => {

    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

  return (
    <div>
        <h2>
            {products.name}
        </h2>

        <p>
            {products.description}
        </p>

        <hr/>
    </div>
  )
}

//productId, par context, servira à l'index pour localiser chaque produit
export async function getStaticsProps(context) {
    const {params} = context
    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await response.json()

    return {
        props: {
            product: data
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [{ params: {productId: "1"}}],
        fallback:true
    }
}


