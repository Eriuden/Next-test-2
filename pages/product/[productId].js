import React from 'react'
import { useRouter } from 'next/router'

/*petit brief sur la régénération statique incrémentale
Ca permet de n'update que les pages le nécéssitant, pas l'app entière
Dans la getStaticProps, on spécifie une clé de revalidation
dont la valeur est le temps qu'il faut pour ré-autoriser une regen
Aussi, ca ne s'active que si l'user fait une requète qui force une regen*/

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
            product: data,
        },
        revalidate: 10,
    }
}

export async function getStaticPaths() {
    return {
        paths: [{ params: {productId: "1"}}],
        fallback:true
    }
}


