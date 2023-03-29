import React from 'react'
import { useSWR } from 'swr'

export const fetcher = async () => {
    const response = await fetch(`http://localhost:4000/dashboard`)
    const data = await response.json()
    return data
}

export const dashboardSwr = () => {
    const { data, errors } = useSWR("dashboard", fetcher)

    if(errors) return "Error occured"
    if(!data) return "Loading"

    return (
        <div>
            <h2>Dashboard</h2>
            <h2>Posts { data.posts }</h2>
            <h2>Likes { data.likes }</h2>
            <h2>Followers { data.followers }</h2>
            <h2>Followings { data.followings }</h2>
        </div>
    )  


}

