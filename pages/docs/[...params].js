import React from 'react'
import { useRouter } from 'next/router'

export const docs = () => {
    const router= useRouter()
    const {params  = []} = router.query

    if(params.length === 2){
        return (<h2>Voici la doc pour {params[0]} et {params[1]}</h2>)
    }   else if (params/length === 1) {
        return (<h2>La doc pour {params[0]}</h2>)
    }

  return (
    <div>Documentation </div>
  )
}

