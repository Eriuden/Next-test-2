import React from 'react'
import { useRouter } from 'next/router'

export default function reviewId() {
    const router = useRouter()
    const { productId, reviewId} = router.query

    return (
    <div>{reviewId} and {productId}</div>
  )
}
