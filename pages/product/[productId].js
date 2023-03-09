// les accolades d'array en nom de fichier js 
// dans Next permettent un routing dynamique

/* le product id en dessous
   il permet d'afficher une info dynamiquement
*/

import React from 'react'
import {useRouter} from "next/router"

export default function productDetail() {
    const router = useRouter()
    const productId = router.query.productId

  return (
    <div>{productId}</div>
  )
}
