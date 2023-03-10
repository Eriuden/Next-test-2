import React from 'react'
import {useRouter} from "next/router"

// les accolades d'array en nom de fichier/dossier js 
// dans Next permettent un routing dynamique

/* le product id en dessous
   il permet d'afficher une info dynamiquement
*/
export default function productDetail() {
    const router = useRouter()
    const productId = router.query.productId

  return (
    <div>{productId}</div>
  )
}