import { useState, useEffect } from "react"

export const dashboard = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashBoardData] = useState(null)

    useEffect(() => {
        async function fetchDashBoardData() {
            const response = await fetch(`http://localhost:4000/dashboard`)
            const data = await response.json()
            setDashBoardData(data)
            setIsLoading(false)
        }
        fetchDashBoardData()
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <h2>Posts { dashboardData.posts }</h2>
            <h2>Likes { dashboardData.likes }</h2>
            <h2>Followers { dashboardData.followers }</h2>
            <h2>Followings { dashboardData.followings }</h2>
        </div>
    )   
}


